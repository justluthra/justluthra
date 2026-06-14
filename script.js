document.addEventListener('DOMContentLoaded', () => {
    // --- ICONS (SVG Paths) ---
    const Icons = {
        Folder: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />',
        Cog: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />',
        Database: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />',
        Document: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />',
        Save: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />',
        Key: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 11l-1.864 1.864a1 1 0 01-1.414 0L6.05 10.636 4.636 12.05A1.5 1.5 0 012.515 10.636l1.414-1.414a6 6 0 018.486-8.486z" />',
        Alert: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />',
        Code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />',
        Terminal: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />',
        Cube: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />',
        Globe: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />',
        Lightning: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
        Git: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />',
        Eye: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />',
        Users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />',
        Shield: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />',
        Search: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',
        Wifi: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />',
        Clock: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />',
        Archive: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />',
        Film: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />',
        Chart: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />',
        Link: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />',
        LockOpen: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />',
        Fingerprint: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.567-4.181m-3.23 12.408C3.791 14.631 4 12.839 4 11c0-2.155-.45-4.187-1.258-6.012" />'
    };

    const categories = {
        ALL: 'All Modules',
        DORKS: 'Google Dorks',
        RECON: 'Recon & Subdomains',
        ARCHIVES: 'Archives & History',
        INTEL: 'OSINT & Intelligence',
        FILES: 'Specific Files'
    };

    const tools = [
        // --- GOOGLE DORKS ---
        { id: 1, title: "Directory Listing", svg: Icons.Folder, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+intitle:index.of` },
        { id: 2, title: "Exposed Configs", svg: Icons.Cog, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini` },
        { id: 3, title: "DB Files", svg: Icons.Database, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:sql+|+ext:dbf+|+ext:mdb` },
        { id: 4, title: "Log Files", svg: Icons.Document, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:log` },
        { id: 5, title: "Backup Files", svg: Icons.Save, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup` },
        { id: 6, title: "Login Pages", svg: Icons.Key, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:login` },
        { id: 7, title: "SQL Errors", svg: Icons.Alert, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"` },
        { id: 8, title: "Public Documents", svg: Icons.Document, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv` },
        { id: 9, title: "phpinfo()", svg: Icons.Code, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"` },
        { id: 10, title: "Shells / Backdoors", svg: Icons.Terminal, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:shell+|+inurl:backdoor+|+inurl:wso+|+inurl:cmd+|+shadow+|+passwd+|+boot.ini+|+inurl:backdoor` },
        { id: 11, title: "Open Redirects", svg: Icons.Link, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http` },
        { id: 12, title: "Struts RCE", svg: Icons.Lightning, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+ext:action+|+ext:struts+|+ext:do` },
        { id: 13, title: "WordPress Files", svg: Icons.Cube, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:wp-content+|+inurl:wp-includes+|+inurl:wp-upload` },
        { id: 14, title: "Git Exposed", svg: Icons.Git, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:".git"+|+inurl:".gitignore" -github` },
        { id: 15, title: "GitLab Config", svg: Icons.Git, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+"gitlab.yml"+|+"database.yml" "private"` },
        { id: 16, title: "ENV Files", svg: Icons.LockOpen, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+filename:.env+OR+filename:.env.local` },
        { id: 17, title: "Htaccess / Info", svg: Icons.Cog, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:"/phpinfo.php"+|+inurl:".htaccess"` },
        { id: 18, title: "Install / Setup", svg: Icons.Cog, category: "DORKS", query: s => `https://www.google.com/search?q=site:${s}+inurl:readme+|+inurl:license+|+inurl:install+|+inurl:setup+|+inurl:config` },

        // --- INTEL ---
        { id: 21, title: "Pastebin Dumps", svg: Icons.Document, category: "INTEL", query: s => `https://www.google.com/search?q=site:pastebin.com+${s}` },
        { id: 22, title: "LinkedIn Employees", svg: Icons.Users, category: "INTEL", query: s => `https://www.google.com/search?q=site:linkedin.com+employees+${s}` },
        { id: 23, title: "GitHub Source", svg: Icons.Git, category: "INTEL", query: s => `https://github.com/search?q="*.${s}"&type=host` },
        { id: 24, title: "ThreatCrowd", svg: Icons.Shield, category: "INTEL", query: s => `http://threatcrowd.org/domain.php?domain=${s}` },
        { id: 25, title: "OpenBugBounty", svg: Icons.Alert, category: "INTEL", query: s => `https://www.openbugbounty.org/search/?search=${s}&type=host` },
        { id: 26, title: "Reddit Mentions", svg: Icons.Users, category: "INTEL", query: s => `https://www.reddit.com/search/?q=${s}&source=recent` },
        { id: 27, title: "Censys (IPv4)", svg: Icons.Search, category: "INTEL", query: s => `https://censys.io/ipv4?q=${s}` },
        { id: 28, title: "Censys (Domains)", svg: Icons.Globe, category: "INTEL", query: s => `https://censys.io/domain?q=${s}` },
        { id: 29, title: "Censys (Certs)", svg: Icons.Fingerprint, category: "INTEL", query: s => `https://censys.io/certificates?q=${s}` },
        { id: 30, title: "Shodan Search", svg: Icons.Eye, category: "INTEL", query: s => `https://www.shodan.io/search?query=${s}` },
        
        // --- RECON ---
        { id: 31, title: "Find Subdomains", svg: Icons.Wifi, category: "RECON", query: s => `https://www.google.com/search?q=site:*.${s}` },
        { id: 32, title: "Deep Subdomains", svg: Icons.Wifi, category: "RECON", query: s => `https://www.google.com/search?q=site:*.*.${s}` },
        { id: 33, title: "Crt.sh (Certificates)", svg: Icons.Key, category: "RECON", query: s => `https://crt.sh/?q=%25.${s}` },
        
        // --- ARCHIVES ---
        { id: 34, title: "Wayback SWF", svg: Icons.Film, category: "FILES", query: s => `https://web.archive.org/cdx/search?url=${s}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000&_=1507209148310` },
        { id: 35, title: "Wayback MIME SWF", svg: Icons.Film, category: "FILES", query: s => `https://web.archive.org/cdx/search?url=${s}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=mimetype:application/x-shockwave-flash&limit=100000&_=1507209148310` },
        { id: 36, title: "Wayback Domain", svg: Icons.Clock, category: "ARCHIVES", query: s => `https://web.archive.org/web/*/(.${s})` },
        { id: 37, title: "Wayback Full", svg: Icons.Clock, category: "ARCHIVES", query: s => `https://web.archive.org/web/*/${s}/*` },
        { id: 38, title: "Wayback WP", svg: Icons.Archive, category: "ARCHIVES", query: s => `http://wwwb-dedup.us.archive.org:8083/cdx/search?url=${s}/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx=` },
        
        // --- FILES ---
        { id: 39, title: "Crossdomain.xml", svg: Icons.Code, category: "FILES", query: s => `http://${s}/crossdomain.xml` },
        { id: 40, title: "SWF (Google)", svg: Icons.Film, category: "FILES", query: s => `https://www.google.com/search?q=+inurl:${s}+ext:swf` },
        { id: 41, title: "SWF (Yandex)", svg: Icons.Film, category: "FILES", query: s => `https://yandex.com/search/?text=site:${s}%20mime:swf` },

            // --- EXTERNAL TOOLS ---
        { id: 42, title: "VirusTotal", svg: Icons.Shield, category: "INTEL", query: s => `https://www.virustotal.com/gui/domain/${s}` },
        { id: 43, title: "Urlscan.io", svg: Icons.Search, category: "INTEL", query: s => `https://urlscan.io/search/#domain:${s}` },
        { id: 44, title: "Wappalyzer", svg: Icons.Code, category: "INTEL", query: s => `https://www.wappalyzer.com/lookup/${s}` },
        { id: 45, title: "Security Headers", svg: Icons.Shield, category: "RECON", query: s => `https://securityheaders.com/?q=${s}&followRedirects=on` },
        { id: 46, title: "BuiltWith", svg: Icons.Cube, category: "INTEL", query: s => `https://builtwith.com/${s}` },
        { id: 47, title: "SSL Labs", svg: Icons.LockOpen, category: "RECON", query: s => `https://www.ssllabs.com/ssltest/analyze.html?d=${s}` },
        { id: 48, title: "Censys Platform", svg: Icons.Chart, category: "INTEL", query: s => `https://platform.censys.io/search?q=%22${s}%22` },
        { id: 49, title: "PublicWWW", svg: Icons.Code, category: "INTEL", query: s => `https://publicwww.com/websites/${s}/` },
        { id: 50, title: "ZoomEye", svg: Icons.Eye, category: "INTEL", query: s => `https://www.zoomeye.ai/searchResult?q=${s}` },
        { id: 51, title: "Jina AI", svg: Icons.Database, category: "INTEL", query: s => `https://r.jina.ai/${s}` },
    ];

    let currentFilter = 'ALL';

    // UI Elements
    const grid = document.getElementById('tools-grid');
    const filterContainer = document.getElementById('filter-container');
    const inputField = document.getElementById('target');
    
    // Render Filters
    Object.keys(categories).forEach(key => {
        const btn = document.createElement('button');
        btn.className = `filter-btn px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300`;
        btn.textContent = categories[key];
        
        if (key === currentFilter) btn.classList.add('active');
        
        btn.onclick = () => {
            currentFilter = key;
            renderTools();
            updateFilterStyles();
        };
        filterContainer.appendChild(btn);
    });

    function updateFilterStyles() {
        Array.from(filterContainer.children).forEach(btn => {
            const btnKey = Object.keys(categories).find(key => categories[key] === btn.textContent);
            if(btnKey === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Render Tools
    function renderTools() {
        grid.innerHTML = '';
        
        let filtered = [];
        if (currentFilter === 'ALL') {
            const dorks = tools.filter(t => t.category === 'DORKS');
            const others = tools.filter(t => t.category !== 'DORKS');
            filtered = [...dorks, ...others];
        } else {
            filtered = tools.filter(t => t.category === currentFilter);
        }

        filtered.forEach((tool, index) => {
            const card = document.createElement('div');
            card.style.animation = `slideIn 0.3s ease-out forwards ${index * 0.02}s`;
            card.style.opacity = '0'; 
            card.className = 'tool-card rounded-lg p-4 cursor-pointer flex items-center justify-between group';
            
            card.innerHTML = `
                <div class="flex items-center gap-4">
                    <div class="h-10 w-10 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-hacker-accent/10 group-hover:border-hacker-accent/30 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            ${tool.svg}
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-theme-primary group-hover:text-hacker-accent transition-colors">${tool.title}</h3>
                        <span class="text-[10px] uppercase text-theme-secondary font-mono tracking-wider">${tool.category}</span>
                    </div>
                </div>
                <div class="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-hacker-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                </div>
            `;

            card.onclick = () => executeTool(tool);
            grid.appendChild(card);
        });
    }

    // Execution Logic
    function getCleanDomain() {
        let site = inputField.value.trim();
        if (!site) return null;
        if (site.indexOf('://') > 0) site = site.substr(site.indexOf('://')+3);
        if (site.indexOf('/') > 0) site = site.substr(0, site.indexOf('/'));
        return site;
    }

    function executeTool(tool) {
        const site = getCleanDomain();
        if (!site) {
            showToast('Please enter a target domain first.', 'error');
            inputField.focus();
            inputField.parentElement.classList.add('ring-2', 'ring-red-500');
            setTimeout(() => inputField.parentElement.classList.remove('ring-2', 'ring-red-500'), 2000);
            return;
        }
        const url = tool.query(site);
        window.open(url, '_blank');
        showToast(`Executing: ${tool.title}`, 'success');
    }

    window.validateAndExecuteActive = function() {
        const site = getCleanDomain();
        if(!site) {
            showToast('Target Domain Required', 'error');
            return;
        }
        showToast('Ready. Select a module below.', 'success');
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') validateAndExecuteActive();
    });

    // Toast
    function showToast(message, type = 'normal') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span class="font-bold mr-2">[${type.toUpperCase()}]</span> ${message}`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-in forwards';
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    }

    // URL Params Check
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const domain = urlParams.get('d');
        if (domain) {
            inputField.value = domain;
            setTimeout(() => {
                validateAndExecuteActive();
            }, 500);
        }
    }

    // Theme & Canvas
    const toggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let isLightMode = localStorage.getItem('theme') === 'light';

    function applyTheme() {
        if(isLightMode) {
            document.body.classList.add('light-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            document.body.classList.remove('light-mode');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
        initParticles();
    }

    toggleBtn.addEventListener('click', () => {
        isLightMode = !isLightMode;
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        applyTheme();
    });

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            
            if(isLightMode) {
                this.color = Math.random() > 0.9 ? '#2563eb' : '#94a3b8'; // Blue/Grey
            } else {
                this.color = Math.random() > 0.9 ? '#00f3ff' : '#222'; // Cyan/DarkGrey
            }
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(100, (width * height) / 15000); 
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    ctx.beginPath();
                    const connColor = isLightMode ? '37, 99, 235' : '0, 243, 255'; 
                    const opacity = isLightMode ? 0.08 : 0.1; 
                    ctx.strokeStyle = `rgba(${connColor}, ${opacity - distance/1500})`; 
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    resize();
    applyTheme();
    renderTools();
    animate();
    checkUrlParams();
});