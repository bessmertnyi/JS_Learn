const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const validLogin = `SELECT * FROM user WHERE email = ? AND password = ?`;

        const [logUser] = await provider.promise().query(validLogin, [email, password]);

        if (!logUser) {
            throw new Error('email or password is not correct')
        }

         [req.validUser] = logUser;

     next()
    }catch (e) {
        res.status(400).json(e.message);
    }
};