var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category');
const { wrapAsync } = require('../../shared/utils/helper');
// const { isLoggedIn } = require('../utils/auth');

// router.use(isLoggedIn);
router.get('/:token', wrapAsync(categoryController.findAll));

module.exports = router;
