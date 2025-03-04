const router = require("express").Router();
const product = require("../model/product.model");
const Admin = require("../model/admin.model");
const categoryModel = require("../model/catModel");
const subCategoryModel = require("../model/subCategory.model");
const { accessPage } = require("../utils/AccessPage");
const SubCategory = require("../model/subCategory.model");
const { verifyUser, isUser } = require("../utils/auth");
const jwt = require("jsonwebtoken");
router.get("/", verifyUser, (req, res) => {
  // console.log(req.cookies);
  res.render("pages/index");
});

router.get("/addCategory", verifyUser, (req, res) => {
  // res.render("pages/addCategory");
  res.render("pages/addCategory");
});

router.get("/viewCategory", verifyUser, async (req, res) => {
  const category = await categoryModel.find();
  res.render("pages/viewCategory", { category });
});

router.get("/updateCategory", verifyUser, async (req, res) => {
  const { id } = req.query;
  const category = await categoryModel.findById(id);
  res.render("pages/updateCategory", { category });
});
router.get("/AddSubCategory", verifyUser, async (req, res) => {
  // res.render("pages/addCategory");
  const Category = await categoryModel.find();
  console.log(Category);
  accessPage(req, res, "pages/AddSubCategory", { Category });
});
router.get("/viewSubCategory", verifyUser, async (req, res) => {
  // res.render("pages/addCategory");
  const category = await subCategoryModel.find().populate("cat_name");
  console.log(category);
  accessPage(req, res, "pages/viewSubCategory", { category });
  console.log(category);
});
router.get("/updateSubCategory", verifyUser, async (req, res) => {
  const { id } = req.query;
  console.log(id);
  const subCategory = await subCategoryModel.findById(id).populate("cat_name");
  const Category = await categoryModel.find();
  res.render("pages/updateSubCategory", { Category, subCategory });
});
router.get("/addProduct", verifyUser, async (req, res) => {
  const categories = await categoryModel.find();
  var subCategories;
  var { cat_id } = req?.query;
  var selectedCategory = req.query.cat_id || "";
  if (cat_id) {
    subCategories = await subCategoryModel.find({ cat_name: cat_id });
  }
  // const subcategories = await subCategoryModel.find().populate("cat_name")
  res.render("pages/addProduct", {
    categories,
    subCategories,
    selectedCategory,
  });
});

router.get("/viewProduct", verifyUser, async (req, res) => {
  const Product = await product
    .find()
    .populate("category")
    .populate("subCategory");
  res.render("pages/viewProduct", { Product });
});

router.get("/updateProduct", verifyUser, async (req, res) => {
  const { id, cat_id } = req.query;

  const categories = await categoryModel.find();
  const SingleProduct = await product
    .findOne({ _id: id })
    .populate("category")
    .populate("subCategory");

  let subCategories;
  if (cat_id) {
    subCategories = await subCategoryModel.find({ cat_name: cat_id });
  } else {
    subCategories = await subCategoryModel.find({
      cat_name: SingleProduct.category?._id,
    });
  }

  const selectCat = cat_id || SingleProduct.category?._id.toString();

  res.render("pages/updateProduct", {
    categories,
    subCategories,
    SingleProduct,
    selectCat,
  });
});

router.get("/register", async (req, res) => {
  res.render("pages/register");
});
router.get("/login", async (req, res) => {
  res.render("pages/login", { message: req.flash("info") });
});
router.get("/logout", async (req, res) => {
  res.clearCookie("admin");
  res.redirect("/");
});

router.get("/changePass", async(req, res) => {
  const token = req.cookies.admin;
  const verifyToken =  jwt.verify(token,"mykey")

  const email = await Admin.findById(verifyToken.id)
  res.render("pages/changePassword",{email});
});

router.get("/myprofile",verifyUser, async (req, res) => {
  // const token=req?cookies?.admin
  console.log("user",req.user)
  const {id }=req?.user
  // console.log(id)
  const SingleAdmin = await Admin.findById(id);
  res.render("pages/MyProfile", { admin: SingleAdmin });
});

router.get("/forgotPassword", (req, res) => {
  res.render("pages/forgotPassword", { message: req.flash("info") });
});

module.exports = router;
