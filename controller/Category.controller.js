const Category = require("../model/Category.model");

// Store a new category
exports.store = async (req, res) => {
  
  try {
    const { Cat_name } = req.body;
    const existCate = await Category.findOne({ Cat_name }).countDocuments();
    if (existCate > 0) {
      res.json({
        success: true,
        message: "Category name already exists.",
      });
    } else {
      const AddCate = await Category.create({ Cat_name });
      res.json({
        success: true, 
        AddCate,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error occurred while adding category.",
      error,
    });
  }
};
exports.trash = async(req,res)=>{
  const {id} =req.params
  // console.log(id);
  await Category.findByIdAndDelete(id)
  res.json({
    message:"cate deleted"
  })
  
}

exports.update = async(req,res)=>{
  const {id} = req.params
  // console.log(id);
  const user = await Category.findOne({_id:id})

  res.json({user})
  

}