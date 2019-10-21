const router = require('express').Router();

const {user} = require('../../controllers');
const {user: userMiddleware} = require('../../middleware');

router.post('/', user.createUser);
router.get('/:id', userMiddleware.checkUserPresentMiddleware, user.userById);
router.get('/', userMiddleware.findAllUsersMiddleware, user.findAllUsers);
router.patch('/:id', userMiddleware.checkUserIdMiddleware, user.updateUsers);
router.delete('/:id', user.userDelete);

module.exports = router;