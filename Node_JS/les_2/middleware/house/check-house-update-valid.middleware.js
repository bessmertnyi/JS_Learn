const { houseValid } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const house = req.body;

        houseValid.newHouseValidator(house);
        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};