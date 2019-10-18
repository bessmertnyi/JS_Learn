const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const UserModel = db.getModel('User');

        const logUser = await UserModel.findOne ({
                where: {
                    email,
                    password
                },
                attributes: ['id']
            });

        if (!logUser) {
            throw new Error('incorrect login or password')
        }

        req.user = logUser.dataValues;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
