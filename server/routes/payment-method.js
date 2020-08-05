var express = require('express');
var router = express.Router();

const paymentMethodController = require('../controllers/payment-method');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

// router.use(isAuthenticated);
router.post('/', wrapAsync(paymentMethodController.create));
router.get('/:user_id', wrapAsync(paymentMethodController.findAll));
router.delete('/:id', wrapAsync(paymentMethodController.delete));

module.exports = router;
