import { Router } from "express";
import {
    getLeaveTypes,
    getLeaveBalances,
    submitLeaveRequest,
    getLeaveRequests,
    reviewLeaveRequest
} from "../controllers/leaveController";

const router = Router();

router.get("/types", getLeaveTypes);
router.get("/balances/:employeeId", getLeaveBalances);
router.post("/request", submitLeaveRequest);
router.get("/requests", getLeaveRequests);
router.put("/request/:id/review", reviewLeaveRequest);

export default router;
