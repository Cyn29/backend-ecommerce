import express from "express";
import { getAllProducts, createNewProduct } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
router.post("/", createNewProduct);
export default router;

