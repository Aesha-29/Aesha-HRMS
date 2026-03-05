import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_key_hrms_2026";

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        role: string;
        type: "Employee" | "Manager" | "Admin";
    };
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ error: "Access Denied: No Token Provided" });
        return;
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET) as any;
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ error: "Invalid Token" });
    }
};
