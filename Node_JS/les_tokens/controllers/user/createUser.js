const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;
        const modelOfUser = db.getModel('User');

        await modelOfUser.create(userToCreate);

        res.json('creat new user!')
    } catch (e) {
        res.json(e.message)
    }
};
