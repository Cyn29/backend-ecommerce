import ProductModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        const productsByCategory = await ProductModel.findAll( {
            where: { category_id: req.params.category_id },
        })
        if(productsByCategory) {
            res.status(200).json(productsByCategory)
        }
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        await ProductModel.create(req.body);
        res.status(201).json({ message: "Product created successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const existingProduct = await ProductModel.findOne({
            where: { product_id: req.params.product_id },
        })
        if(!existingProduct) {
            return res.status(400).json({message: "Product not found"});
        }
        const updatedProduct = await ProductModel.update(req.body, {
            where: { product_id: req.params.product_id },
        });
        if (updatedProduct) {
            return res.status(200).json({ message: "Product updated successfully!" });
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
            return res.status(200).json({ message: "Product deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
