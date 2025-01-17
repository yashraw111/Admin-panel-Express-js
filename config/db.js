const { default: mongoose } = require("mongoose");

exports.dbConnect =()=>{
    
mongoose.connect("mongodb://localhost:27017/Cat")
.then(()=>{
  console.log("db connect");
})
.catch((err)=>{
  console.log(err);
})

}