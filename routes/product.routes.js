const upload = require('../config/upload')
const productController = require('../controller/product.controller')

const router = require('express').Router()

router.post('/',upload.single('pr_image'),productController.store)
<<<<<<< HEAD
router.post('/edit/:id',upload.single('pr_image'),productController.update)
router.get('/delete/:id',productController.trash)

=======
>>>>>>> 335e9b12e88d472bbae50c4f5c2f14c1c9ba61d8

module.exports=router