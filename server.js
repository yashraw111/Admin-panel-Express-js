const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
const router = require("./routes/cat_route");
// const categoryModel=require('./model/catModel');
const View = require("./routes/view.route");
const Admin = require('./routes/admin.routes')
require('./config/db').dbConnect()


app.use("/api", router);
app.use('/',View)
app.use('/api/admin',Admin)
app.get("/", (req, res) => res.render("pages/index"));
app.listen(PORT, () => console.log(`Example app listening on PORT http://localhost:${PORT}`));
