const router = require("express").Router();

const Admin = require("../model/admin.model");
const categoryModel = require("../model/catModel");
const { accessPage } = require("../utils/AccessPage");

router.get("/", (req, res) => {
  console.log(req.cookies);
  accessPage(req,res,"pages/index")
});

router.get("/addCategory", (req, res) => {
  // res.render("pages/addCategory");
  accessPage(req,res,"pages/addCategory")

});

router.get("/viewCategory", async (req, res) => {
  const category = await categoryModel.find();
  res.render("pages/viewCategory", { category });
});

router.get("/updateCategory", async (req, res) => {
  const { id } = req.query;
  const category = await categoryModel.findById(id);
  res.render("pages/updateCategory", { category });
});
router.get("/register", async (req, res) => {
  res.render("pages/register");
});
router.get("/login", async (req, res) => {
  res.render("pages/login",{message:req.flash("info")});
});
router.get('/logout',async(req,res)=>{
  res.clearCookie("admin")
  res.redirect('/login')
})  

router.get("/myprofile",async(req,res)=>{
  const cookiesAdmin = req.cookies.admin
  // console.log(cookies);
  const email = cookiesAdmin.email
  // console.log(email);
  const SingleAdmin= await Admin.findOne({email})
  // console.log(SingleAdmin);
  res.render('pages/MyProfile',{admin:SingleAdmin})
})

module.exports = router;
