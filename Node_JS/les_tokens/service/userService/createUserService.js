const db = require('../../database').getInstance();

module.exports = async creatingUser => {
    const modelOfUser = db.getModel('User');

    const userToCreate = await modelOfUser.create(creatingUser);

    return userToCreate && userToCreate.dataValues
};