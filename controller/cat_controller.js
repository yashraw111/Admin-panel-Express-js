const Category = require("../model/catModel");
exports.store = async (req, res) => {
  try {
    const { cat_name } = req.body;
    const existCat = await Category.findOne({ cat_name }).countDocuments();
    if (existCat) {
      res.json({
        success: true,
        message: "already exist",
      });
    } else {
      await Category.create({ cat_name });
    
      res.redirect('/viewCategory')
<<<<<<< HEAD
=======

    
>>>>>>> 335e9b12e88d472bbae50c4f5c2f14c1c9ba61d8
    }
  } catch (err) {
    console.log(err);
   
  }
};
exports.trash=async(req,res)=>{
  try{
    const {id}=req.params
    await Category.findByIdAndDelete(id)
    res.redirect("/viewCategory")
  }catch(err){
   res.json(err)
  }
}
exports.update=async(req,res)=>{
  try{
    const {id}=req.params
    await Category.findByIdAndUpdate({_id:id},{cat_name:req.body.cat_name})
    res.redirect("/viewCategory")
  }catch(err){
    res.json(err)
  }
}
