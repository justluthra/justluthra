// worker.js
// Receives chunks, scans with regexes, sends partial results back.

// ----- regex patterns -----
const patterns = {
  // Domains: extract from URLs or standalone
  domains: /(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?![a-zA-Z0-9])/g,
  // URLs
  urls: /https?:\/\/[^\s<>"']+/gi,
  // Endpoints: paths starting with /api/ or /v1/ etc., or common patterns
  endpoints: /\/(?:api|v\d|rest|graphql|auth|users|admin|static|assets|uploads|media|download|public|private|internal|webhook|callback|oauth|login|signup|register|profile|settings)[\/\w\-.]*/gi,
  // Emails
  emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  // JWTs (rough but catches most)
  jwts: /eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+/g,
  // Secrets – broad list of common secret patterns
  secrets: /(?:AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA|DSA|EC|OPENSSH) PRIVATE KEY-----|sk-[a-zA-Z0-9]{20,}|github[-_]?token|ghp_[a-zA-Z0-9]{36}|gho_[a-zA-Z0-9]{36}|ghu_[a-zA-Z0-9]{36}|ghs_[a-zA-Z0-9]{36}|api[-_]?key|api[-_]?secret|secret[-_]?key|password|passwd|pwd|token|auth|bearer)[a-zA-Z0-9\-_]{0,40}/gi,
};

// Store accumulated results for the current file
let currentResults = {
  domains: new Set(),
  urls: new Set(),
  endpoints: new Set(),
  emails: new Set(),
  jwts: new Set(),
  secrets: new Set(),
};

let fileTotalChunks = 0;
let processedChunks = 0;
let overlapBuffer = ''; // last 512 chars of previous chunk to catch matches across boundaries

function scanChunk(text) {
  const local = { ...currentResults }; // we'll merge later
  const newItems = {};

  for (const [key, regex] of Object.entries(patterns)) {
    const matches = text.matchAll(regex);
    const set = new Set();
    for (const m of matches) {
      set.add(m[0]);
    }
    if (set.size > 0) {
      newItems[key] = set;
    }
  }
  return newItems;
}

self.onmessage = function(e) {
  const msg = e.data;

  if (msg.type === 'start') {
    // Reset for new file
    currentResults = {
      domains: new Set(),
      urls: new Set(),
      endpoints: new Set(),
      emails: new Set(),
      jwts: new Set(),
      secrets: new Set(),
    };
    processedChunks = 0;
    fileTotalChunks = 0;
    overlapBuffer = '';
    self.postMessage({ type: 'progress', progress: 0, file: msg.fileName });
    return;
  }

  if (msg.type === 'chunk') {
    fileTotalChunks = msg.total;
    const chunkSize = 1024 * 1024; // 1MB
    const overlapSize = 512; // characters, not bytes – but we decode first

    const decoder = new TextDecoder('utf-8');
    let chunkText = decoder.decode(new Uint8Array(msg.data));

    // Prepend overlap from previous chunk to catch cross-boundary matches
    if (overlapBuffer) {
      chunkText = overlapBuffer + chunkText;
    }

    // Store overlap for next chunk: last 512 characters of the current chunk (before we cut)
    // but we need to be careful: we want the overlap from the original chunk, not the prepended one.
    // We'll keep the original chunk's tail separately.
    const originalChunk = chunkText;
    if (originalChunk.length > overlapSize) {
      overlapBuffer = originalChunk.slice(-overlapSize);
    } else {
      overlapBuffer = originalChunk;
    }

    // Scan the combined text
    const found = scanChunk(chunkText);

    // Merge into currentResults
    for (const [key, set] of Object.entries(found)) {
      for (const item of set) {
        currentResults[key].add(item);
      }
    }

    processedChunks++;
    const pct = (processedChunks / fileTotalChunks) * 100;
    self.postMessage({
      type: 'progress',
      progress: pct,
      file: msg.fileName,
    });

    // Send partial results every few chunks to keep UI responsive
    if (processedChunks % 5 === 0 || processedChunks === fileTotalChunks) {
      const partial = {};
      for (const [key, set] of Object.entries(currentResults)) {
        partial[key] = Array.from(set);
      }
      self.postMessage({ type: 'partial', ...partial });
    }
    return;
  }

  if (msg.type === 'end') {
    // Final results for this file
    const final = {};
    for (const [key, set] of Object.entries(currentResults)) {
      final[key] = Array.from(set);
    }
    self.postMessage({ type: 'complete', ...final });
    // Reset for next file
    currentResults = {
      domains: new Set(),
      urls: new Set(),
      endpoints: new Set(),
      emails: new Set(),
      jwts: new Set(),
      secrets: new Set(),
    };
    overlapBuffer = '';
    processedChunks = 0;
    fileTotalChunks = 0;
  }
};
