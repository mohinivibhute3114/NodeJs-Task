const Category = require('../models/Category');


exports.addCategory = async (req, res) => {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
};


exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};


exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res.json(category);
};


exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ message: 'Category deleted' });
};
