import { Router } from "express";
import {clientController} from "../controllers/index.js"

const router = Router();

router.post("/register/client", clientController.createClient);
router.put("/client/:id");
router.delete("client/id");

export default router;