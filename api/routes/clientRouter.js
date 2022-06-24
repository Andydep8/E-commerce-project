import { Router } from "express";
import {clientController} from "../controllers/index.js"

const router = Router();

router.post("/register/client", clientController.createClient);
router.put("/client/:id", clientController.updateClient);
router.delete("client/id", clientController.deleteClient);

export default router;