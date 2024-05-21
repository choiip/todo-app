import { Router } from "express";
import {
  getAllDuties,
  createDuty,
  updateDutyById,
} from "../controllers/dutyController";

const router = Router();

router.get("/duties", getAllDuties);
router.post("/duties", createDuty);
router.put("/duties/:id", updateDutyById);

export default router;
