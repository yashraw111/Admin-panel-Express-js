<<<<<<< HEAD
const Product = require("../model/product.model");

exports.store = async (req, res) => {
  const { category, subCategory, pr_name, pr_price } = req.body;
  await Product.create({
    category,
    subCategory,
    pr_name,
    pr_price,
    pr_image: req?.file?.filename,
  });
  res.redirect("/viewProduct");
};

exports.trash = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete({ _id: id });
    res.redirect("/viewProduct");
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;

  const { category, subCategory, pr_name, pr_price } = req.body;

  await Product.findByIdAndUpdate(
    { _id: id },
    { category, subCategory, pr_name, pr_price, pr_image: req?.file?.filename }
  );
  res.redirect("/viewProduct");
};
const Product = require('../model/product.model')

exports.store = async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
}
>>>>>>> 335e9b12e88d472bbae50c4f5c2f14c1c9ba61d8
