import db from "../database/db.js";
import { DataTypes } from "sequelize";

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