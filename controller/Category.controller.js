const Category = require("../model/Category.model");

// Store a new category
exports.store = async (req, res) => {
  try {
    const { Cat_name } = req.body;
    const existCate = await Category.findOne({ Cat_name }).countDocuments();
    if (existCate > 0) {
      res.json({
        success: true,
        message: "Category name already exists.",
      });
    } else {
      const AddCate = await Category.create({ Cat_name });
      res.json({
        success: true,
        AddCate,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error occurred while adding category.",
      error,
    });
  }
};

// List all categories
exports.index = async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json({
      success: true,
      allCategory,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error occurred while fetching categories.",
      error,
    });
  }
};
