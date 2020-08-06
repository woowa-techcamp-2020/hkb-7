var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const userController = require('../controllers/user');
const { wrapAsync } = require('../../shared/utils/helper');
const { authenticateLocal, authenticateGoogleCallback } = require('../utils/auth');

router.post('/', wrapAsync(userController.create));
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);
router.post('/login', authenticateLocal, wrapAsync(userController.findById));

router.get('/:id', wrapAsync(userController.findById));
router.get('/', wrapAsync(userController.findAll));
router.put('/', wrapAsync(userController.update));
router.delete('/:id', wrapAsync(userController.delete));

router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
  const payload = { id: req.user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res
    .status(200)
    .cookie('token', token, {
      // expires after 7 days (1 week)
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    })
    .redirect('/activity');
});

module.exports = router;