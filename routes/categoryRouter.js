import express from "express";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();
router.get("/", getAllCategories);
/**
 * @openapi
 * /categories:
 *   get:
 *     tags:
 *       - categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.post("/", createCategory);
/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.put("/:category_id", updateCategory);
/**
 * @openapi
 * /categories:/id:
 *   put:
 *     tags:
 *       - categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                   $ref: "#/components/schemas/Product"
 */
router.delete("/:category_id", deleteCategory);
/**
 * @openapi
 * /categories:/id:
 *   delete:
 *     tags:
 *       - categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

export default router;
