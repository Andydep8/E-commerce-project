import { Router} from "express";
import {productController} from "../controllers/index.js"

const router = Router();

router.post("/products/create", productController.createProduct);
router.put("/products/:id");
router.delete("/products/:id");
router.get("/products")

export default router