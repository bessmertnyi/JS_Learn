const db = require('../../database').getInstance();

module.exports = async id => {
    const modelOfUser = await db.getModel('User');

    const presentUser = await modelOfUser.findByPk(id, {
        attributes: ['id', 'name']
    });

    return presentUser && presentUser.dataValues;
};