import express from "express";
import { getAllProducts, getProductById, getProductsByCategory, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - products
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       404:
 *         description: Products not found
 */
router.get("/:product_id", getProductById);
/**
 * @swagger
 * /products/{product_id}:
 *   get:
 *     tags:
 *       - products
 *     summary: Get product by ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       404:
 *         description: Product not found
 */
router.get("/categories/:category_id", getProductsByCategory);
/**
 * @swagger
 * /products/categories/{category_id}:
 *   get:
 *     tags:
 *       - products
 *     summary: Get products by category
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       404:
 *         description: Category not found
 */
router.post("/", createProduct);
/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - products
 *     summary: Create a new product
 *     requestBody:
 *       description: Object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Product"
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 */
router.put("/:product_id", updateProduct);
/**
 * @swagger
 * /products/{product_id}:
 *   put:
 *     tags:
 *       - products
 *     summary: Update a product by ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Product"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Product"
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product not found
 */
router.delete("/:product_id", deleteProduct);
/**
 * @swagger
 * /products/{product_id}:
 *   delete:
 *     tags:
 *       - products
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Product not found
 */
export default router;

