const { Schema,model } = require("mongoose");
const common = {
    type:String,
    required:true,
    unique:true,
    trim:true
}
const AdminSchema = new Schema({
   
    userName:common,
    email:common,
    password:{
        ...common,
        type:Number
    }
},{
    timeStamps:true
})

const Admin = model("Admin",AdminSchema)

module.exports = Admin
