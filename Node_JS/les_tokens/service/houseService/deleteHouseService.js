const db = require('../../database').getInstance();

module.exports = async id => {
    const modelOfHouse = db.getModel('House');

    await modelOfHouse.destroy({
        where: {
            id: id
        }
    });
};