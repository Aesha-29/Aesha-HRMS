const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");

const debugApp = require("./debug").default;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

try {
    const employeeRoutes = require("./routes/employeeRoutes").default;
    const exEmployeeRoutes = require("./routes/exEmployeeRoutes").default;
    const financeRoutes = require("./routes/financeRoutes").default;
    const managerRoutes = require("./routes/managerRoutes").default;
    const onboardingRoutes = require("./routes/onboardingRoutes").default;
    const offboardingRoutes = require("./routes/offboardingRoutes").default;
    const levelRoutes = require("./routes/levelRoutes").default;
    const profileChangeRoutes = require("./routes/profileChangeRoutes").default;

    // Feature 9: Structure Management
    const branchRoutes = require("./routes/branchRoutes").default;
    const departmentRoutes = require("./routes/departmentRoutes").default;
    const designationRoutes = require("./routes/designationRoutes").default;
    const deviceRoutes = require("./routes/deviceRoutes").default;
    const bulkUpdateRoutes = require("./routes/bulkUpdateRoutes").default;
    const hierarchyRoutes = require("./routes/hierarchyRoutes").default;
    const resignationRoutes = require("./routes/resignationRoutes").default;
    const promotionRoutes = require("./routes/promotionRoutes").default; // NEW
    const leaveRoutes = require("./routes/leaveRoutes").default; // NEW
    const authRoutes = require("./routes/authRoutes").default; // NEW
    const attendanceRoutes = require("./routes/attendanceRoutes").default; // NEW
    const retirementRoutes = require("./routes/retirementRoutes").default;
    const payrollRoutes = require("./routes/payrollRoutes").default; // NEW

    app.use("/api/employees", employeeRoutes);
    app.use("/api/exemployees", exEmployeeRoutes);
    app.use("/api/finance", financeRoutes);
    app.use("/api/managers", managerRoutes);
    app.use("/api/onboarding", onboardingRoutes);
    app.use("/api/offboarding", offboardingRoutes);
    app.use("/api/levels", levelRoutes);
    app.use("/api/profile-changes", profileChangeRoutes);
    app.use("/api/hierarchy", hierarchyRoutes);
    app.use("/api/resignations", resignationRoutes);
    app.use("/api/promotions", promotionRoutes); // NEW
    app.use("/api/leaves", leaveRoutes); // NEW
    app.use("/api/auth", authRoutes); // NEW
    app.use("/api/attendance", attendanceRoutes); // NEW
    app.use("/api/payroll", payrollRoutes); // NEW
    app.use("/api/retirements", retirementRoutes);

    // Feature 9: Structure Management
    app.use("/api/branches", branchRoutes);
    app.use("/api/departments", departmentRoutes);
    app.use("/api/designations", designationRoutes);
    app.use("/api/devices", deviceRoutes);
    app.use("/api/bulk-update", bulkUpdateRoutes);
} catch (err) {
    app.use((req, res) => {
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

if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running locally on port ${PORT}`);
    });
}

export default app;
