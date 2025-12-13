const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  about: { type: String, default: "" },
  goal: { type: String, default: "" }
});

module.exports = mongoose.model("User", UserSchema);
