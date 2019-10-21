const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const modelOfUser = db.getModel('User');

        let presentUser = await modelOfUser.findByPk(id);

        if (!presentUser) {
            // return res.redirect('/users_register');
            throw new Error(`user id ${id} is not present`)
        }

        req.user = presentUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};