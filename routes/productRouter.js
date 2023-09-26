import express from "express";
import { getAllProducts, createNewProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
router.post("/", createNewProduct);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

export default router;

