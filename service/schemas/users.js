const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});

const users = mongoose.model("users", userSchema);

module.exports = { users };
