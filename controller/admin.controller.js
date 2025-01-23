const Admin = require("../model/admin.model");
const {  plainToHash, hashToPlain } = require("../utils/password");

const Register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existEmail = await Admin.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    else{
      const hash = await plainToHash(password)
      await Admin.create({ userName, email, password:hash });
      res.redirect('/login')

  //   res.status(200).json({
  //  success: true,
  //     message: "Admin created successfully",
  //   });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const login = async(req,res)=>{
  const {email,password}= req.body
  const existEmail = await Admin.findOne({email}).countDocuments().exec()
  // console.log(existEmail);

  if(existEmail>0){
    const admin = await Admin.findOne({email})
    // console.log(admin);
    
    const match_pass = await hashToPlain(password,admin.password)
    if(match_pass){
      const payload = {
        username:admin.userName,
        email:admin.email
      }
      res.cookie('admin',payload,{httpOnly:true})
      res.redirect('/')
      
    }
    else{
      res.json("password not Match ")
    }
  }else{
    res.json("email is not exist")
  }

}

module.exports = { Register,login };
