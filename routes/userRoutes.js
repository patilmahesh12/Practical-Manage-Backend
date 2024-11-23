import express from "express";
import { createUser, getAllUsers, getUsersByRole } from "../controllers/userController.js";
import { checkRole } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create", checkRole(["Admin", "Teacher", "Student"]), createUser);
router.get("/get", checkRole(["Admin"]), getAllUsers);
router.get("/admins/get", checkRole(["Admin"]), (req, res) => getUsersByRole(req, res, "Admin"));
router.get("/teachers/get", checkRole(["Admin"]), (req, res) => getUsersByRole(req, res, "Teacher"));
router.get("/students/get", checkRole(["Admin", "Teacher"]), (req, res) => getUsersByRole(req, res, "Student"));

export default router;
