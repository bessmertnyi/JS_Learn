const db = require('../../database').getInstance();

module.exports = async id => {
    const modelOfUser = db.getModel('User');

    await modelOfUser.destroy({
        where: {
            id: id
        }
    });
};