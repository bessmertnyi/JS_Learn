const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const modelOfUser = db.getModel('User');

        const allUsers = await modelOfUser.findAll();

        if (!allUsers.length) {
            return res.redirect('/users_register');
        }

        req.user = allUsers;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};