var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

// router.use(isAuthenticated);
router.post('/', wrapAsync(categoryController.create));
router.get('/:id', wrapAsync(categoryController.findById));
router.get('/', wrapAsync(categoryController.findAll));
router.put('/', wrapAsync(categoryController.update));
router.delete('/:id', wrapAsync(categoryController.delete));

module.exports = router;
