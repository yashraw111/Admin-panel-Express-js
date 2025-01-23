const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
const cookieParser = require('cookie-parser')
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
const router = require("./routes/cat_route");
// const categoryModel=require('./model/catModel');
const View = require("./routes/view.route");
const Admin = require('./routes/admin.routes')
require('./config/db').dbConnect()

app.use(cookieParser())
app.use("/api", router);
app.use('/',View)
app.use('/api/admin',Admin)
app.listen(PORT, () => console.log(`Example app listening on PORT http://localhost:${PORT}`));
