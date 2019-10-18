const checkUserValidityMiddleware = require('./check-user-validity.middleware');
const checkLoginMiddleware = require('./check-login.middleware');
const checkUserIdMiddleware = require('./check-User-Id.middleware');
const checkUserUpdateIdMiddleware = require('./check-user-update-id.middleware');

module.exports = {
    checkUserValidityMiddleware,
    checkLoginMiddleware,
    checkUserIdMiddleware,
    checkUserUpdateIdMiddleware
};



//
// const isUserPresentMiddleware = require('./is-user-present.middleware');
//
// module.exports = {
//     isUserPresentMiddleware
// };