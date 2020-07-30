const User = require('../models/user');

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};

exports.findById = async (req, res) => {
  const user = await User.findOne('*', { id: req.params.id });
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
