const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {houseId} = req.params;
        const houseIdSearch = `SELECT * FROM house WHERE id = ?`;

        const [validHouseId] = await provider.promise().query(houseIdSearch, [houseId]);

        if (!searchId.length) {
            throw new Error('nor found house!')
        }

        [req.houseValidId] = validHouseId;
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};