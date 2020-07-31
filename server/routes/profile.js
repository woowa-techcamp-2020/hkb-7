var express = require('express');
var router = express.Router();

const profileController = require('../controllers/profile');
const { wrapAsync } = require('../../shared/utils/helper');
const { isAuthenticated } = require('../utils/auth');

router.use(isAuthenticated);
router.post('/', wrapAsync(profileController.create));
router.get('/:id', wrapAsync(profileController.findById));
router.get('/', wrapAsync(profileController.findAll));
router.put('/', wrapAsync(profileController.update));
router.delete('/:id', wrapAsync(profileController.delete));

module.exports = router;
