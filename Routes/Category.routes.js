const express = require("express");

const router = express.Router();
const Category = require("../controller/Category.controller");
router.post("/addCategory", Category.store);
router.get("/delete/:id", Category.trash);
router.get("/update/:id", Category.update);

module.exports = router;
