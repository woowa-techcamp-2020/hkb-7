const Category = require('../models/category');
const { readIdInJwt } = require('../utils/auth');

exports.create = async (req, res) => {
  const category = await Category.create(req.body);
  res.send(category);
};

exports.findAll = async (req, res) => {
  const userId = readIdInJwt(req.params.token);
  const categories = await Category.findAll('id, name, is_income', { user_id: userId });
  res.send({ categories });
};


exports.update = async (req, res) => {
  await Category.update(req.body);
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Category.delete(req.params.id);
  res.status(200).send({ completed: true });
};
