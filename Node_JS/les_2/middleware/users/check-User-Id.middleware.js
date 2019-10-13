const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const userIdSearch = `SELECT * FROM user WHERE id = ?`;

        const [searchId] = await provider.promise().query(userIdSearch, [userId]);


        if (!searchId.length){
            throw new Error('login or password is not gooood')
        }

        [req.goodLog] = searchId;
    next()
    } catch (e) {
        res.status(400).json(e.message);
    }
};