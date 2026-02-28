import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/api/debug-paths', (req, res) => {
    try {
        const rootDir = process.cwd();
        const dirs = [rootDir, path.join(rootDir, 'node_modules'), path.join(rootDir, 'prisma')];

        const output = {};
        for (let d of dirs) {
            try { output[d] = fs.readdirSync(d); } catch (e) { output[d] = e.message; }

            if (d.includes("node_modules")) {
                try { output[path.join(d, "@prisma")] = fs.readdirSync(path.join(d, "@prisma")); } catch (e) { output[path.join(d, "@prisma")] = e.message; }
                try { output[path.join(d, ".prisma")] = fs.readdirSync(path.join(d, ".prisma")); } catch (e) { output[path.join(d, ".prisma")] = e.message; }
            }
            if (d.includes("prisma")) {
                try { output[path.join(rootDir, "src", "prisma", "generated", "client")] = fs.readdirSync(path.join(rootDir, "src", "prisma", "generated", "client")); } catch (e) { output[path.join(rootDir, "src", "prisma", "generated", "client")] = e.message; }
            }
        }
        res.json({ cwd: process.cwd(), dirName: __dirname, files: output });
    } catch (err) {
        res.status(500).json({ error: err.message, stack: err.stack });
    }
});

export default app;
