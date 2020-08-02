var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');
const { wrapAsync } = require('../../shared/utils/helper');
const { authenticateLocal, isAuthenticated } = require('../utils/auth');

router.post('/', wrapAsync(userController.create));
router.post('/login', authenticateLocal(), wrapAsync(userController.findById));

// router.use(isAuthenticated);
router.get('/:id', wrapAsync(userController.findById));
router.get('/', wrapAsync(userController.findAll));
router.put('/', wrapAsync(userController.update));
router.delete('/:id', wrapAsync(userController.delete));

module.exports = router;
