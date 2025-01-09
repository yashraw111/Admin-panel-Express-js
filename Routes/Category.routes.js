const express = require("express");

const router = express.Router();
const Category = require("../controller/Category.controller");

router.post("/", Category.store);
router.get("/", Category.index);

module.exports = router;
