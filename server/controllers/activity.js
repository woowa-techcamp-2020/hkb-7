const Activity = require('../models/activity');
const { readIdInJwt } = require('../utils/auth');

exports.create = async (req, res) => {
  const userId = readIdInJwt(req.body.token);
  req.body.user_id = userId;
  const activity = await Activity.create(req.body);
  res.send(activity);
};

exports.findById = async (req, res) => {
  const activity = await Activity.findOne(
    'activity.id, activity.price, activity.content, activity.date, payment_method_id, category_id, category.is_income',
    { 'activity.id': req.params.id },
  );
  if (!activity) res.status(404).send('activity not found');
  else res.send(activity);
};

exports.findAll = async (req, res) => {
  const userId = readIdInJwt(req.params.token);
  const activities = await Activity.findAll(
    'activity.id, activity.price, activity.content, activity.date, category.name as category, category.is_income, payment_method.name as payment',
    {
      'YEAR(date)': req.params.year,
      'MONTH(date)': req.params.month,
      'activity.user_id': userId,
      'activity.is_active': 1,
    },
  );
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
