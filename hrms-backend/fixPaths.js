const fs = require('fs');
const path = require('path');

let index = fs.readFileSync(path.join(__dirname, 'src', 'index.ts'), 'utf8');
index = index.replace(/from '\.\/prisma\/generated\/client'/g, "from '../generated/client'");
fs.writeFileSync(path.join(__dirname, 'src', 'index.ts'), index, 'utf8');

let prismaCfg = fs.readFileSync(path.join(__dirname, 'src', 'config', 'prisma.ts'), 'utf8');
prismaCfg = prismaCfg.replace(/from '\.\.\/prisma\/generated\/client'/g, "from '../../generated/client'");
fs.writeFileSync(path.join(__dirname, 'src', 'config', 'prisma.ts'), prismaCfg, 'utf8');
console.log("fixed imports");
