import express from "express";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();
router.get("/", getAllCategories);
router.post("/", createCategory);
router.put("/:category_id", updateCategory);
router.delete("/:category_id", deleteCategory);

export default router;
