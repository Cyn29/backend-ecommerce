import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CategoryModel = db.define("categories", {
    category_id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand: {type:DataTypes.STRING}
}, {
    timestamps: false,
});

export default CategoryModel;