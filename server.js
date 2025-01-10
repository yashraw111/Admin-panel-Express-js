const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.set("view engine ","ejs")
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const Router = require('./Routes/Category.routes');
const { default: mongoose } = require("mongoose");
const CategoryModel = require('./model/Category.model')

app.get("/", (req, res) =>{
  res.render('pages/index.ejs')
});
app.get("/addCategory", (req, res) =>{
  res.render('pages/addCategory.ejs')
});

app.get('/viewCategory',async(req,res)=>{

  const category = await  CategoryModel.find()
  // console.log(category);
  
  res.render('pages/viewCategory.ejs',{category})
})
mongoose.connect("mongodb://localhost:27017/Category")
.then(()=>{
  console.log("db Connected ...");
})
.catch((err)=>{
  console.log(err);
})

app.use('/Cate',Router)
app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
