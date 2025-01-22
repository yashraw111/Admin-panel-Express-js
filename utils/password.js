const bcrypt = require('bcryptjs')

exports.planHash = async(password)=>{
    console.log(password);
    
    // const salt = await bcrypt.getSalt(10)
    // const hashPassword =await bcrypt.hash(password,salt) 

    // return hashPassword
}
