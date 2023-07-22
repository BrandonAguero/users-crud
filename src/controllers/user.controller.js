const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
});

module.exports = {
  getAll,
};
