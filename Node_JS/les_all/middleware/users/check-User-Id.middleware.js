const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const modelOfUser = db.getModel('User');

        let userID = await modelOfUser.findByPk(id);

        if (!userID) {
            throw new Error('No user with this ID');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};

