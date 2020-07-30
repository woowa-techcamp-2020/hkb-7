const Profile = require('../models/profile');

exports.create = async (req, res) => {
  const profile = await Profile.create(req.body);
  res.send(profile);
};

exports.findById = async (req, res) => {
  const profile = await Profile.findOne('*', { id: req.params.id });
  if (!profile) res.status(404).send('profile not found');
  else res.send(profile);
};

exports.findAll = async (req, res) => {
  const profiles = await Profile.findAll('user_id, first_name, last_name, email, term, picture');
  res.send({ profiles });
};

exports.update = async (req, res) => {
  await Profile.update(req.body);
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Profile.delete(req.params.id);
  res.status(200).send({ completed: true });
};
