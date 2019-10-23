const db = require('../../database').getInstance();

module.exports = async id => {
    const modelOfHouse = await db.getModel('House');

    const presentHouse = await modelOfHouse.findByPk(id);

    return presentHouse && presentHouse.dataValues;
};