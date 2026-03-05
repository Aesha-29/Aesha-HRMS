import { Request, Response } from "express";
import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

// Clock In API
export const clockIn = async (req: any, res: Response): Promise<void> => {
    try {
        const employeeId = req.user.id;

        // Use local timezone string to track date accurately
        const todayStr = new Date().toISOString().split('T')[0];
        const todayDate = new Date(todayStr); // Start of day 00:00:00 UTC

        // Check if already clocked in today
        const existingLog = await prisma.attendanceLog.findUnique({
            where: {
                employeeId_date: {
                    employeeId,
                    date: todayDate
                }
            }
        });

        if (existingLog) {
            res.status(400).json({ error: "Already clocked in today." });
            return;
        }

        const log = await prisma.attendanceLog.create({
            data: {
                employeeId,
                date: todayDate,
                clockIn: new Date(),
                ipAddress: req.ip || req.connection.remoteAddress
            }
        });

        res.status(201).json({ message: "Successfully clocked in.", log });
    } catch (error) {
        console.error("Clock In Error:", error);
        res.status(500).json({ error: "Failed to clock in." });
    }
};

// Clock Out API
export const clockOut = async (req: any, res: Response): Promise<void> => {
    try {
        const employeeId = req.user.id;

        const todayStr = new Date().toISOString().split('T')[0];
        const todayDate = new Date(todayStr);

        const existingLog = await prisma.attendanceLog.findUnique({
            where: {
                employeeId_date: {
                    employeeId,
                    date: todayDate
                }
            }
        });

        if (!existingLog) {
            res.status(400).json({ error: "No clock-in record found for today." });
            return;
        }

        if (existingLog.clockOut) {
            res.status(400).json({ error: "Already clocked out today." });
            return;
        }

        const clockOutTime = new Date();
        const clockInTime = new Date(existingLog.clockIn!);

        // Calculate Total Hours Worked
        const diffMs = clockOutTime.getTime() - clockInTime.getTime();
        const totalHours = parseFloat((diffMs / (1000 * 60 * 60)).toFixed(2));

        const updatedLog = await prisma.attendanceLog.update({
            where: { id: existingLog.id },
            data: {
                clockOut: clockOutTime,
                totalHours,
                status: totalHours < 4 ? "Half Day" : "Present"
            }
        });

        res.json({ message: "Successfully clocked out.", log: updatedLog });
    } catch (error) {
        console.error("Clock Out Error:", error);
        res.status(500).json({ error: "Failed to clock out." });
    }
};

// Get Employee's Current Day Status
export const getTodayStatus = async (req: any, res: Response): Promise<void> => {
    try {
        const employeeId = req.user.id;
        const todayStr = new Date().toISOString().split('T')[0];
        const todayDate = new Date(todayStr);

        const log = await prisma.attendanceLog.findUnique({
            where: {
                employeeId_date: {
                    employeeId,
                    date: todayDate
                }
            }
        });

        res.json({ log });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch today's status." });
    }
};

// Get Monthly Report for HR/Admin
export const getMonthlyAttendance = async (req: Request, res: Response): Promise<void> => {
    try {
        const month = req.query.month as string; // YYYY-MM
        if (!month) {
            res.status(400).json({ error: "Month parameter (YYYY-MM) is required." });
            return;
        }

        const startDate = new Date(`${month}-01T00:00:00.000Z`);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 1);

        const logs = await prisma.attendanceLog.findMany({
            where: {
                date: {
                    gte: startDate,
                    lt: endDate
                }
            },
            include: {
                employee: {
                    select: {
                        firstName: true,
                        lastName: true,
                        employeeId: true,
                        department: true
                    }
                }
            },
            orderBy: [
                { employeeId: 'asc' },
                { date: 'asc' }
            ]
        });

        res.json({ logs });
    } catch (error) {
        console.error("Fetch Monthly Attendance Error:", error);
        res.status(500).json({ error: "Failed to fetch aggregate attendance report." });
    }
};
