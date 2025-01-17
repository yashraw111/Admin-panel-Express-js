const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
const router = require("./routes/cat_route");
const categoryModel=require('./model/catModel');
const Admin = require("./routes/admin.routes");
require('./config/db').dbConnect()


app.get('/addCategory',(req,res)=>{
  res.render('pages/addCategory')
})

app.get('/viewCategory',async(req,res)=>{
  const category=await categoryModel.find()
  res.render('pages/viewCategory',{category})
})

app.get("/updateCategory",async(req,res)=>{
  const {id}=req.query
  const category=await categoryModel.findById(id)
  res.render('pages/updateCategory',{category})
})
app.get("/register",async(req,res)=>{
  res.render("pages/register")
})
app.get("/login",async(req,res)=>{
  res.render("pages/login")
})

app.use("/api", router);
app.use('/Admin',Admin)
app.get("/", (req, res) => res.render("pages/index"));
app.listen(PORT, () => console.log(`Example app listening on PORT http://localhost:${PORT}`));
