var express = require('express');
var router = express.Router();

const categoryController = require('../controllers/category');
const { wrapAsync } = require('../../shared/utils/helper');

router.get('/:token', wrapAsync(categoryController.findAll));

module.exports = router;
