const Product = require('../model/product.model')

exports.store = async(req,res)=>{
    // console.log(req.body)
    // console.log(req.file)

    const {category,subCategory,pr_name,pr_price}= req.body
    await Product.create({category,subCategory,pr_name,pr_price,pr_image:req?.file?.filename})

    res.redirect('/viewProduct')

}

exports.trash = async(req,res)=>{
    try {
        const {id}= req.params
       await Product.findByIdAndDelete({_id:id})
       res.redirect('/viewProduct')
    } catch (error) {
        // res.json({})
        console.log(error)
        
    }
  
}