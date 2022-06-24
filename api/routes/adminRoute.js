import express from "express";
import validateAdminCreation from "../middlewares/adminCreation.js";
import {adminController} from "../controllers/index.js"

const router = express.Router();

router.post("/register/admin", adminController.createAdmin);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("admins/id", adminController.deleteAdmin);

export default router;