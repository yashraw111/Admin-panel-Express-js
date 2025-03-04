const { Schema, model } = require("mongoose");
const common = {
  type: String,
  required: true,
  unique: true,
  trim: true,
};
const AdminSchema = new Schema(
  {
    userName: common,
    email: common,
    password: {
      ...common,
      type: String,
    },
    admin_profile: String,
    token: String,
    role_id: {
      type: Number,
      required: true,
      default: 0,
      enum: [0, 1],
    },
  },
  {
    timeStamps: true,
  }
);

const Admin = model("Admin", AdminSchema);

module.exports = Admin;
