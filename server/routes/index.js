var express = require('express');
const path = require('path');
var router = express.Router();

const userRouter = require('./user');
const activityRouter = require('./activity');
const categoryRouter = require('./category');
const paymentMethodRouter = require('./payment-method');
const profileRouter = require('./profile');

router.use('/user', userRouter);
router.use('/activity', activityRouter);
router.use('/category', categoryRouter);
router.use('/payment-method', paymentMethodRouter);
router.use('/profile', profileRouter);

router.get('/activity', (req, res) => {
  res.render('index.html');
});
router.get('/calendar', (req, res) => {
  res.render('index.html');
});
router.get('/statistic', (req, res) => {
  res.render('index.html');
});

module.exports = router;
