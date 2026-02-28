import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";

import debugApp from './debug';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

try {
    const employeeRoutes = require("./routes/employeeRoutes").default;
    const exEmployeeRoutes = require("./routes/exEmployeeRoutes").default;
    const adminRoutes = require("./routes/adminRoutes").default;
    const managerRoutes = require("./routes/managerRoutes").default;
    const onboardingRoutes = require("./routes/onboardingRoutes").default;
    const offboardingRoutes = require("./routes/offboardingRoutes").default;

    app.use("/api/employees", employeeRoutes);
    app.use("/api/exemployees", exEmployeeRoutes);
    app.use("/api/admin", adminRoutes);
    app.use("/api/managers", managerRoutes);
    app.use("/api/onboarding", onboardingRoutes);
    app.use("/api/offboarding", offboardingRoutes);
} catch (err) {
    app.use("*", (req, res) => {
        let ls = {};
        try { ls['__dirname'] = fs.readdirSync(__dirname); } catch (e) { }
        try { ls['cwd'] = fs.readdirSync(process.cwd()); } catch (e) { }
        try { ls['src'] = fs.readdirSync(__dirname + "/src"); } catch (e) { }
        try { ls['generated'] = fs.readdirSync(__dirname + "/generated"); } catch (e) { }
        try { ls['prisma'] = fs.readdirSync(__dirname + "/prisma"); } catch (e) { }
        try { ls['prisma_generated'] = fs.readdirSync(__dirname + "/prisma/generated"); } catch (e) { }
        res.status(500).json({ error_message: err.message, stack: err.stack, files: ls });
    });
}

app.use(debugApp);

export default app;
