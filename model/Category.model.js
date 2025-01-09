const { Schema, model } = require("mongoose");

const CategorySchema =new Schema({
    Cat_name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }

},{
    timestamps:true
}) 

const Category =model ("Category",CategorySchema)

module.exports = Category