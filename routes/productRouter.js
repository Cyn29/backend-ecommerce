import express from "express";
import { getAllProducts, getProductsByCategory, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
router.get("/:category_id", getProductsByCategory)
router.post("/", createProduct);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

export default router;

