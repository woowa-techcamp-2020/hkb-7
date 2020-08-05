const PaymentMethod = require('../models/payment-method');

exports.create = async (req, res) => {
  const paymentMethod = await PaymentMethod.create(req.body);
  res.send(paymentMethod);
};

exports.findAll = async (req, res) => {
  const paymentMethods = await PaymentMethod.findAll('id, name', { user_id: req.params.user_id });
  res.send({ paymentMethods });
};

exports.delete = async (req, res) => {
  await PaymentMethod.delete(req.params.id);
  res.status(200).send({ completed: true });
};
