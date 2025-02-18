const { Schema, model } = require("mongoose");

const productSchema = new Schema({
<<<<<<< HEAD
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: "subCategory",
  },
  pr_name: {
    type: String,
    required: true,
    trim: true,
  },
  pr_price: {
    type: Number,
    required: true,
  },

  pr_image: {
    type: String,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
=======
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    subCategory:{
        type: Schema.Types.ObjectId,
        ref:'subCategory'
    },
    pr_name:{
        type:String,
        required:true,
        trim:true
    },
    pr_price:{
        type:Number,
        required:true
    },
    pr_dec:{
        type:String,
        required:true,
        trim:true
    },
    pr_image:{
        type:String,
    }

})

const Product = model("Product",productSchema)

module.exports = Product;
>>>>>>> 335e9b12e88d472bbae50c4f5c2f14c1c9ba61d8
