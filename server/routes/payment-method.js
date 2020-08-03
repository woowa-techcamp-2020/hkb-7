var express = require('express');
var router = express.Router();

const paymentMethodController = require('../controllers/payment-method');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

// router.use(isAuthenticated);
router.post('/', wrapAsync(paymentMethodController.create));
router.get('/:id', wrapAsync(paymentMethodController.findById));
router.get('/', wrapAsync(paymentMethodController.findAll));
router.put('/', wrapAsync(paymentMethodController.update));
router.delete('/:id', wrapAsync(paymentMethodController.delete));

module.exports = router;
