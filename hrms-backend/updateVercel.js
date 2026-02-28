const { execSync } = require('child_process');
try {
    const result = execSync(`npx vercel api /v9/projects/hrms-backend -X PATCH -d '{"rootDirectory":"hrms-backend"}'`, { stdio: 'inherit' });
    console.log("Success");
} catch (e) {
    console.log("Failed");
}
