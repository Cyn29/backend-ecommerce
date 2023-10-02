import express from "express";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();
router.get("/", getAllCategories);
/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *       - categories
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Category"
 *       404:
 *         description: Categories not found
 */
router.post("/", createCategory);
/**
 * @swagger
 * /categories:
 *   post:
 *     tags:
 *       - categories
 *     summary: Create a new category
 *     requestBody:
 *       description: Object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Category"
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Category"
 */
router.put("/:category_id", updateCategory);
/**
 * @swagger
 * /categories/{category_id}:
 *   put:
 *     tags:
 *       - categories
 *     summary: Update a category by ID
 *     parameters:
 *       - in: path
 *         name: category_id
 *         required: true
 *         description: Category ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Category"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Category"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Category not found
 */
router.delete("/:category_id", deleteCategory);
/**
 * @swagger
 * /categories/{category_id}:
 *   delete:
 *     tags:
 *       - categories
 *     summary: Delete a category by ID
 *     parameters:
 *       - in: path
 *         name: category_id
 *         required: true
 *         description: Category ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Category not found
 */

export default router;
