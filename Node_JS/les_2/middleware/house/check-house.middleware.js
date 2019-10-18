const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {city} = req.body;
        const validCity = `SELECT * FROM house WHERE city = ?`;

        const [validHouse] = await provider.promise().query(validCity, [city]);

        if (!validHouse.length) {
            throw new Error(`not house in this ${city}`)
        }

        [req.houseValid] = validHouse;
        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};