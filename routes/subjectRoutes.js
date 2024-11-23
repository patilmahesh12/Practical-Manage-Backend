import express from "express";
import { checkRole } from "../middleware/roleMiddleware.js";
import { addSubject, getAllSubjects } from "../controllers/subjectController.js";

const router = express.Router();

router.post("/create", checkRole(["Admin"]), addSubject);
router.get("/get", getAllSubjects);

export default router;
