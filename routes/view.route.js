// const express = require("express");
// const app = express();
// // const router = express.Router()
// const router = require("./routes/cat_route");
// const categoryModel=require('./model/catModel');

// app.get("/addCategory", (req, res) => {
//   res.render("pages/addCategory");
// });

// app.get("/viewCategory", async (req, res) => {
//   const category = await categoryModel.find();
//   res.render("pages/viewCategory", { category });
// });

// app.get("/updateCategory", async (req, res) => {
//   const { id } = req.query;
//   const category = await categoryModel.findById(id);
//   res.render("pages/updateCategory", { category });
// });

// module.exports = app;
