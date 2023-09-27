import db from "../database/db.js";
import { DataTypes } from "sequelize";

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         product_id: 
 *           type: number
 *           example: 1
 *         title: 
 *           type: string
 *           example: Adidas  
 *         product_description:
 *           type: string
 *           example: For Running
 *         price:
 *           type: number
 *           example: 100
 *         category_id:
 *           type: number
 *           example: 3
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const ProductModel = db.define("products", {
    product_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING},
    product_description: {type:DataTypes.TEXT},
    price: {type:DataTypes.INTEGER},
    category_id: {type:DataTypes.INTEGER}
}, {
    timestamps: false,
});

export default ProductModel;