import ProductModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNewProduct = async (req, res) => {
    try {
        const { title, product_description, price, category_id } = req.body;
        if(!title || !product_description || !price || !category_id) {
            return res.status(400).json({message: "All fields are required"});
        }
        const newProduct = await ProductModel.create({
            title,
            product_description,
            price,
            category_id
        });
        res.status(201).json(newProduct);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
};
