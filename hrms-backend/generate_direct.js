const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const schemaPath = path.join(__dirname, 'prisma', 'schema.prisma');
const schemaContent = fs.readFileSync(schemaPath, 'utf8');
console.log(`Read schema.prisma: ${schemaContent.split('\\n').length} lines`);

if (schemaContent.includes('BulkUpdateBatch')) {
    console.log("Schema CONTAINS BulkUpdateBatch");
} else {
    console.log("Schema DOES NOT containing BulkUpdateBatch");
}

try {
    console.log("Running Prisma generate programmatically...");
    execSync('node node_modules/prisma/build/index.js generate --schema=./prisma/schema.prisma', { stdio: 'inherit' });
    console.log("Prisma generate completed.");
} catch (e) {
    console.error("Generator failed: ", e.message);
}
