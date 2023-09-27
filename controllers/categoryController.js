import CategoryModel from "../models/categoryModel.js";

export const getAllCategories = async(req, res) => {
    try {
        const categories = await CategoryModel.findAll();
        res.json(categories);
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createCategory = async (req, res) => {
    try {
        await CategoryModel.create(req.body);
        res.status(201).json({message: "Category created successfully!"})
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await CategoryModel.update(req.body, {
            where: {category_id: req.params.category_id}
        });
        if(updatedCategory) {
            res.status(201).json({message: "Category updated successfully!"})
        }
    }catch(error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteCategory = async (req,res) => {
    try {
    const deletedCategory = await CategoryModel.destroy({
        where: {category_id: req.params.category_id}
    });
    if(deletedCategory) {
        res.status(200).json({message: "Category deleted successfully!"})
    }
    }catch(error) {
        res.status(500).json({message: error.message})
    }
}