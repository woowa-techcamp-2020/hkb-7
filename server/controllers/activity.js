const Activity = require('../models/activity');
const { readIdInJwt } = require('../utils/auth');

exports.create = async (req, res) => {
  const userId = readIdInJwt(req.body.token);
  req.body.user_id = userId;
  console.log(req.body)
  const activity = await Activity.create(req.body);
  res.send(activity);
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
  console.log(activities)
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
