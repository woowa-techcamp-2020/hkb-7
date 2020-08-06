const PaymentMethod = require('../models/payment-method');
const { readIdInJwt } = require('../utils/auth');

exports.create = async (req, res) => {
  const paymentMethod = await PaymentMethod.create(req.body);
  res.send(paymentMethod);
};

exports.findAll = async (req, res) => {
  const userId = readIdInJwt(req.params.token);
  const paymentMethods = await PaymentMethod.findAll('id, name', { user_id: userId });
  res.send({ paymentMethods });
};

exports.delete = async (req, res) => {
  await PaymentMethod.delete(req.params.id);
  res.status(200).send({ completed: true });
};
