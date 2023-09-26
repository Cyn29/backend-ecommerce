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
        await ProductModel.create(req.body);
        res.status(200).json({ message: "Product created successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await ProductModel.update(req.body, {
            where: { product_id: req.params.product_id },
        });
        if (updatedProduct) {
            return res.status(200).json({ message: "Product has been updated successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await ProductModel.destroy({
            where: { product_id: req.params.product_id },
        });
        if (deletedProduct) {
            return res.status(200).json({ message: "Product has been deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
