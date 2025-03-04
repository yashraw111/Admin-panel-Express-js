const { default: mongoose } = require("mongoose");

// const DB_URL = "mongodb+srv://adminpanel:admin$123@adminpanel.08qbg.mongodb.net/"
// const DB_URL = "mongodb://localhost:27017/admin-jwt"
exports.dbConnect = () => {
  mongoose
    .connect("mongodb+srv://adminpanel:admin$123@adminpanel.08qbg.mongodb.net/")
    .then(() => {
      console.log("db connect");
    })
    .catch((err) => {
      console.log(err);
    });
};
