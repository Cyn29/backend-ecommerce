import db from "../database/db.js";
import { DataTypes } from "sequelize";

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         category_id: 
 *           type: number
 *           example: 1
 *         brand: 
 *           type: string
 *           example: Adidas  
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const CategoryModel = db.define("categories", {
    category_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand: {type:DataTypes.STRING}
}, {
    timestamps: false,
});

export default CategoryModel;