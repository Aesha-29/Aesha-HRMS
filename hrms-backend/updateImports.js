const fs = require('fs');
const path = require('path');

function replacePrismaImport(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replacePrismaImport(fullPath);
        } else if (fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const newContent = content.replace(/from\s+['"]@prisma\/client['"]/g, "from '../prisma/generated/client'");
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replacePrismaImport(path.join(__dirname, 'src'));

let indexContent = fs.readFileSync(path.join(__dirname, 'src', 'index.ts'), 'utf8');
indexContent = indexContent.replace(/from\s+['"]@prisma\/client['"]/g, "from './prisma/generated/client'");
fs.writeFileSync(path.join(__dirname, 'src', 'index.ts'), indexContent, 'utf8');
console.log("Updated index.ts");
