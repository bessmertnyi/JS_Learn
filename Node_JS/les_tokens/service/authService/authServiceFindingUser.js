const db = require('../../database').getInstance();

module.exports = async (email, password) => {
    const UserModel = db.getModel('User');

    const findingUser = await UserModel.findOne({
        where: {
            email,
            password
        },
        attributes: ['id']
    });
    return findingUser && findingUser.dataValues;
};
