var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

// router.use(isAuthenticated);
router.get('/:user_id', wrapAsync(categoryController.findAll));

module.exports = router;
