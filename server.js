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


app.get("/", (req, res) =>{
  res.render('pages/index.ejs')
});

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
