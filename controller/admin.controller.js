const Admin = require("../model/admin.model");

const addAdmin = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existEmail = await Admin.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    await Admin.create({ userName, email, password });
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { addAdmin };
