import { Request, Response } from "express";
import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

// Get configured Leave Types
export const getLeaveTypes = async (req: Request, res: Response) => {
    try {
        const types = await prisma.leaveType.findMany({
            where: { status: "Active" }
        });
        res.json(types);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch leave types" });
    }
};

// Get Employee Leave Balances
export const getLeaveBalances = async (req: Request, res: Response) => {
    const { employeeId } = req.params;
    const currentYear = new Date().getFullYear();

    try {
        // Attempt to find balances for this year
        let balances = await prisma.leaveBalance.findMany({
            where: {
                employeeId: parseInt(employeeId as string),
                year: currentYear
            },
            include: {
                leaveType: true
            }
        });

        // If no balances exist, initialize them from LeaveTypes
        if (balances.length === 0) {
            const types = await prisma.leaveType.findMany({ where: { status: "Active" } });
            const newBalances = types.map(type => ({
                employeeId: parseInt(employeeId as string),
                leaveTypeId: type.id,
                year: currentYear,
                total: type.defaultDays,
                used: 0,
                pending: 0
            }));

            if (newBalances.length > 0) {
                await prisma.leaveBalance.createMany({ data: newBalances });
                balances = await prisma.leaveBalance.findMany({
                    where: { employeeId: parseInt(employeeId as string), year: currentYear },
                    include: { leaveType: true }
                });
            }
        }

        res.json(balances);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch leave balances" });
    }
};

// Submit a Leave Request
export const submitLeaveRequest = async (req: Request, res: Response): Promise<void> => {
    const { employeeId, leaveTypeId, startDate, endDate, days, reason } = req.body;
    const currentYear = new Date().getFullYear();

    try {
        // Verify sufficient balance
        const balance = await prisma.leaveBalance.findUnique({
            where: {
                employeeId_leaveTypeId_year: {
                    employeeId: parseInt(employeeId),
                    leaveTypeId: parseInt(leaveTypeId),
                    year: currentYear
                }
            }
        });

        if (!balance) {
            res.status(404).json({ error: "Leave balance not initialized" });
            return;
        }

        if (balance.total - balance.used - balance.pending < days) {
            res.status(400).json({ error: "Insufficient leave balance for this request" });
            return;
        }

        // Create the request
        const request = await prisma.leaveRequest.create({
            data: {
                employeeId: parseInt(employeeId),
                leaveTypeId: parseInt(leaveTypeId),
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                days: parseFloat(days),
                reason
            }
        });

        // Lock the requested days in pending balance
        await prisma.leaveBalance.update({
            where: { id: balance.id },
            data: { pending: { increment: parseFloat(days) } }
        });

        res.json(request);
    } catch (error) {
        res.status(500).json({ error: "Failed to submit leave request" });
    }
};

// Get All Leave Requests (for HR/Manager Dashboard)
export const getLeaveRequests = async (req: Request, res: Response) => {
    try {
        const requests = await prisma.leaveRequest.findMany({
            include: {
                employee: true,
                leaveType: true
            },
            orderBy: { createdAt: "desc" }
        });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch leave requests" });
    }
};

// Review (Approve/Reject) Leave Request
export const reviewLeaveRequest = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { status, reviewerId } = req.body; // status: "Approved" or "Rejected"

    try {
        const request = await prisma.leaveRequest.findUnique({ where: { id: parseInt(id as string) } });

        if (!request) {
            res.status(404).json({ error: "Request not found" });
            return;
        }
        if (request.status !== "Pending") {
            res.status(400).json({ error: `Request already ${request.status}` });
            return;
        }

        const currentYear = request.startDate.getFullYear();

        // Update the request status
        const updatedRequest = await prisma.leaveRequest.update({
            where: { id: parseInt(id as string) },
            data: {
                status,
                reviewedBy: reviewerId,
                reviewDate: new Date()
            }
        });

        // Update balance
        if (status === "Approved") {
            await prisma.leaveBalance.update({
                where: {
                    employeeId_leaveTypeId_year: {
                        employeeId: request.employeeId,
                        leaveTypeId: request.leaveTypeId,
                        year: currentYear
                    }
                },
                data: {
                    pending: { decrement: request.days },
                    used: { increment: request.days }
                }
            });
        } else if (status === "Rejected") {
            await prisma.leaveBalance.update({
                where: {
                    employeeId_leaveTypeId_year: {
                        employeeId: request.employeeId,
                        leaveTypeId: request.leaveTypeId,
                        year: currentYear
                    }
                },
                data: {
                    pending: { decrement: request.days }
                }
            });
        }

        res.json(updatedRequest);
    } catch (error) {
        res.status(500).json({ error: "Failed to review leave request" });
    }
};
