const upload = require('../config/upload')
const productController = require('../controller/product.controller')

const router = require('express').Router()

router.post('/',upload.single('pr_image'),productController.store)
router.get('/delete/:id',productController.trash)

module.exports=router