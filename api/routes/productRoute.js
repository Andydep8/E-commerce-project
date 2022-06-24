import { Router} from "express";
import {productController} from "../controllers/index.js"

const router = Router();

router.post("/products/create", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);
router.get("/products", productController.getProduct)

export default router