var express = require('express');
var router = express.Router();

const userRouter = require('./user');
const activityRouter = require('./activity');
const categoryRouter = require('./category');
const paymentMethodRouter = require('./payment-method');
const profileRouter = require('./profile');
const { isAuthenticated } = require('../utils/auth');

router.use('/user', userRouter);
router.use('/activity', activityRouter);
router.use('/category', categoryRouter);
router.use('/payment-method', paymentMethodRouter);
router.use('/profile', profileRouter);

router.get('/', function (req, res, next) {
  res.render('index.html');
});

module.exports = router;
