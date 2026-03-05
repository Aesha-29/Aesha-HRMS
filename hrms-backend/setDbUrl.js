const { execSync } = require('child_process');
const fs = require('fs');
const url = fs.readFileSync('dburl.txt', 'utf8').trim();
console.log("Uploading DB URL: " + url.substring(0, 10) + "...");
execSync(`npx vercel env add DATABASE_URL production`, { input: url, stdio: ['pipe', 'inherit', 'inherit'] });
console.log("Done.");
