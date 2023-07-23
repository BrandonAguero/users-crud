const catchError = require("../utils/catchError");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.sendStatus(400);
  return res.json(user);
});

const create = catchError(async (req, res) => {
  const body = req.body;
  const user = await User.create(body);
  return res.status(201).json(user);
});

const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const userDestroy = await User.destroy({ where: { id } });
  if (!userDestroy) return res.sendStatus(400);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await User.update(body, {
    where: { id },
    returning: true,
  });
  if (user[0] === 0) return res.sendStatus(400);
  return res.json(user[1][0]);
});

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
  update,
};
