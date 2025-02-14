const Product = require('../model/product.model')

exports.store = async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
}