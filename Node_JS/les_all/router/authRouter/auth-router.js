const router = require('express').Router();

const { user } = require('../../controllers');
const { user: userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.checkLoginMiddleware, user.userLogin);

module.exports = router;
