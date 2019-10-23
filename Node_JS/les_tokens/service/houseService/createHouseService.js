const db = require('../../database').getInstance();

module.exports = async creatingHouse => {
    const modelOfHouse = db.getModel('House');

    const houseToCreate = await modelOfHouse.create(creatingHouse);

    return houseToCreate && houseToCreate.dataValues;
};