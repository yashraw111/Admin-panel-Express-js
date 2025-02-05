const SubCategory = require("../model/subCategory.model");
exports.Store = async (req, res) => {
  try {
    const { cat_name, sub_category } = req.body;
 const sCategory=await SubCategory.create({cat_name, sub_category});
 res.redirect('/viewSubCategory')
  } catch (error) {
    res.json({message:true,error})
    console.log(error);
  }
};

exports.index=async(req,res)=>{
  try{
    const subCategory=await SubCategory.find().populate('category')
    res.json(subCategory)
  }catch(err){
    res.json(err)
  }
}

exports.delete= async(req,res)=>{
  try{
    const {id}=req.params
    await SubCategory.findByIdAndDelete({_id:id})
    res.redirect('/viewSubCategory')
    // res.json({message:"Deleted"})
  }catch(err){
    res.json(err)
  }
}

exports.edit=async(req,res)=>{
  const {id} = req.query

  console.log(id)
}