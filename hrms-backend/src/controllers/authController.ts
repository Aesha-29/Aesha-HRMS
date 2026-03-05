import { Request, Response } from "express";
import { PrismaClient } from "../generated/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_key_hrms_2026";

export const login = async (req: Request, res: Response): Promise<void> => {
    const { identifier, password } = req.body;

    try {
        let user: any = null;
        let type: "Employee" | "Manager" | "Admin" = "Employee";

        // 1. Try finding an Employee by Employee ID or Email
        user = await prisma.employee.findFirst({
            where: {
                OR: [
                    { employeeId: identifier },
                    { email: identifier },
                    { personalEmail: identifier }
                ]
            }
        });

        if (user) {
            type = "Employee";
        } else {
            // 2. Fallback to Managers if no employee found
            user = await prisma.manager.findFirst({
                where: { email: identifier }
            });
            if (user) type = "Manager";
        }

        if (!user) {
            res.status(401).json({ error: "Invalid credentials. User not found." });
            return;
        }

        // Checking password
        // NOTE: In production, all users should have a bcrypted password.
        // For this prototype, if the password field is null, we'll allow "password123" as a fallback
        let isMatch = false;

        if (user.password) {
            isMatch = await bcrypt.compare(password, user.password);
        } else {
            // Temporary generic password for testing accounts created before Auth module
            isMatch = password === "password123";
        }

        if (!isMatch) {
            res.status(401).json({ error: "Invalid password." });
            return;
        }

        // Sign JWT Token
        const payload = {
            id: user.id,
            email: user.email || user.personalEmail || "",
            role: user.role, // 'Employee', 'HR', 'Admin', 'Manager'
            type
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: type === "Employee" ? `${user.firstName} ${user.lastName}` : user.name,
                email: user.email || user.personalEmail,
                role: user.role,
                type
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Authentication failed." });
    }
};

export const me = async (req: any, res: Response) => {
    // req.user is populated by authMiddleware
    res.json({ user: req.user });
};
