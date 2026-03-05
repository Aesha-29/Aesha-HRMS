const { spawn } = require('child_process');
const fs = require('fs');
const cp = spawn('npx.cmd', ['vite'], { cwd: 'c:\\Users\\Ash\\OneDrive\\Desktop\\Hrms\\hrms-master', shell: true });
cp.stdout.on('data', d => fs.appendFileSync('vite_dump.log', d));
cp.stderr.on('data', d => fs.appendFileSync('vite_dump.log', d));
setTimeout(() => { cp.kill(); process.exit(0); }, 15000);
