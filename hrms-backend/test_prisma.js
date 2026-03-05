const fs = require('fs');
const { execSync } = require('child_process');
try {
    console.log("Running Prisma generate using node module directly...");
    const out = execSync('node ./node_modules/prisma/build/index.js generate', { cwd: __dirname, encoding: 'utf-8' });
    fs.writeFileSync('prisma_output_node.txt', out);
} catch (err) {
    let errStr = "ERROR: " + err.message + "\n";
    if (err.stdout) errStr += "STDOUT: " + err.stdout + "\n";
    if (err.stderr) errStr += "STDERR: " + err.stderr + "\n";
    fs.writeFileSync('prisma_output_node.txt', errStr);
}
