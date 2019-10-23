const db = require('../../database').getInstance();

module.exports = async (id, houseNew) => {
    const houseModel = db.getModel('House');

    await houseModel.update(houseNew, {
        where: {
            id: id
        }
    });
};