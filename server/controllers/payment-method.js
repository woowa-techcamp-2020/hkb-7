const PaymentMethod = require('../models/payment-method');

exports.create = async (req, res) => {
  const paymentMethod = await PaymentMethod.create(req.body);
  res.send(paymentMethod);
};

exports.findById = async (req, res) => {
  const paymentMethod = await PaymentMethod.findOne('*', { id: req.params.id });
  if (!paymentMethod) res.status(404).send('paymentMethod not found');
  else res.send(paymentMethod);
};

exports.findAll = async (req, res) => {
  const paymentMethods = await PaymentMethod.findAll('id, user_id, name');
  res.send({ paymentMethods });
};

exports.update = async (req, res) => {
  await PaymentMethod.update(req.body);
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await PaymentMethod.delete(req.params.id);
  res.status(200).send({ completed: true });
};
