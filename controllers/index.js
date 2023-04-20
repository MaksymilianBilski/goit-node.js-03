const users = require("../service/schemas/users");

const createUser = async (req) => {
  const { name, phone } = req.body;
  const newUser = new users({ name, phone });
  await newUser.save();
};

const findById = async (id) => {
  const response = await users.findById(id);
  return response;
};

module.exports = { createUser, findById };
