const checkLoginMiddleware = require('./check-login.middleware');
const checkUserIdMiddleware = require('./check-User-Id.middleware');
// const checkUserUpdateIdMiddleware = require('./check-user-update-id.middleware');
const checkUserPresentMiddleware = require('./check-user-present.middleware');
const findAllUsersMiddleware = require('./find-all-users.middleware');


module.exports = {
    checkLoginMiddleware,
    checkUserIdMiddleware,
    // checkUserUpdateIdMiddleware,
    checkUserPresentMiddleware,
    findAllUsersMiddleware
};



//
// const isUserPresentMiddleware = require('./is-user-present.middleware');
//
// module.exports = {
//     isUserPresentMiddleware
// };