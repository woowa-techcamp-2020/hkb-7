var express = require('express');
var router = express.Router();

const activityController = require('../controllers/activity');
const { wrapAsync } = require('../../shared/utils/helper');
// const { isLoggedIn } = require('../utils/auth');

//router.use(isLoggedIn);

router.post('/', wrapAsync(activityController.create));
router.get('/:token/:year/:month', wrapAsync(activityController.findAll));
router.put('/', wrapAsync(activityController.update));
router.delete('/:id', wrapAsync(activityController.delete));

module.exports = router;
