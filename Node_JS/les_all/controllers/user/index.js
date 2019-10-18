const createUser = require('./createUser');
const userLogin = require('./userLogin');
const userById = require('./getUserById');
const updateUsers = require('./updateUser');
const findAllUsers = require('./findAllUsers');
const userDelete = require('./userDelete');


module.exports = {
    createUser,
    userLogin,
    userById,
    updateUsers,
    findAllUsers,
    userDelete
};

