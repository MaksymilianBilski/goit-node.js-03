const mongoose = require("mongoose");
require("dotenv").config();
const connectionUsers = mongoose.createConnection(
  process.env.DATABASE_API + "contact-self-COURSE"
);

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
});

const users = connectionUsers.model("users", userSchema);

module.exports = users;
