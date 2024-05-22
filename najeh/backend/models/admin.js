const mongoose = require("mongoose");

const Admin = mongoose.model("Admin", {
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
module.exports = Admin;
