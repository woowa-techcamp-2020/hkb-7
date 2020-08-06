const bcrypt = require('bcrypt');
const User = require('../models/user');
const { readIdInJwt } = require('../utils/auth');

exports.create = async (req, res) => {
  const salt = await bcrypt.genSalt(+process.env.SALTROUNDS);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const user = await User.create(req.body);
  res.send(user);
};

exports.googleCreate = async (req, res) => {
  const user = await User.create(req);
  res.send(user);
};

exports.findById = async (req, res) => {
  const userId = readIdInJwt(req.params.id);
  const user = await User.findOne('*', { id: userId });
  if (!user) res.status(404).send('user not found');
  else res.send(user);
};

exports.findAll = async (req, res) => {
  const users = await User.findAll('id, username, password');
  res.send({ users });
};

exports.update = async (req, res) => {
  await User.update(req.body);
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await User.delete(req.params.id);
  res.status(200).send({ completed: true });
};
