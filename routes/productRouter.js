import express from "express";
import { getAllProducts, getProductsByCategory, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - products
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
router.get("/:category_id", getProductsByCategory);
router.post("/", createProduct);
/**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - products
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
 *                     $ref: "#/components/schemas/Product"
 */
router.put("/:product_id", updateProduct);
/**
 * @openapi
 * /products:/id:
 *   put:
 *     tags:
 *       - products
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
router.delete("/:product_id", deleteProduct);
/**
 * @openapi
 * /products:/id:
 *   delete:
 *     tags:
 *       - products
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
 *                     $ref: "#/components/schemas/Product"
 */

export default router;

