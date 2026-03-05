const fs = require('fs');
const path = require('path');

const srcStr = fs.readFileSync(path.join(__dirname, 'prisma', 'schema.prisma'), 'utf8');

// Strip any hidden characters, null bytes, or zero-width spaces that Rust might choke on
// Only keep standard printable ASCII and standard newlines
let cleanStr = srcStr.replace(/[^\\x09\\x0A\\x0D\\x20-\\x7E]/g, '');

fs.writeFileSync(path.join(__dirname, 'prisma', 'schema_clean.prisma'), cleanStr, 'utf8');
console.log("Wrote clean schema to schema_clean.prisma. Length: ", cleanStr.length);
