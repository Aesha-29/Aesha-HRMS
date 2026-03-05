const { execSync } = require('child_process');
const fs = require('fs');
try {
    const out = execSync('node_modules\\.bin\\tsc.cmd --noEmit', { encoding: 'utf8', stdio: 'pipe' });
    fs.writeFileSync('tsc_output2.log', 'SUCCESS\n' + out);
} catch (err) {
    fs.writeFileSync('tsc_output2.log', 'ERROR\n' + err.stdout + '\n' + err.stderr);
}
