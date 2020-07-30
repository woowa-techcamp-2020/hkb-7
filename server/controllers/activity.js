const Activity = require('../models/activity');

exports.create = async (req, res) => {
  const activity = await Activity.create(req.body);
  res.send(activity);
};

exports.findById = async (req, res) => {
  const activity = await Activity.findOne('*', { id: req.params.id });
  if (!activity) res.status(404).send('activity not found');
  else res.send(activity);
};

exports.findAll = async (req, res) => {
  const activities = await Activity.findAll('id, content, data, user_id, payment_method_id, category_id');
  res.send({ activities });
};

exports.update = async (req, res) => {
  await Activity.update(req.body);
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Activity.delete(req.params.id);
  res.status(200).send({ completed: true });
};
