var express = require('express');
var router = express.Router();

const paymentMethodController = require('../controllers/payment-method');
const { wrapAsync } = require('../../shared/utils/helper');

router.post('/', wrapAsync(paymentMethodController.create));
router.get('/:token', wrapAsync(paymentMethodController.findAll));
router.delete('/:id', wrapAsync(paymentMethodController.delete));

module.exports = router;
