const db = require('../../database').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {houseID} = req.params;
        const modelOfHouse = db.getModel('House');

        let presentHouse = await modelOfHouse.findByPk(houseID);

        if (!presentHouse) {
            throw new Error(`house with ${houseID} is not present `)
        }

        req.house = presentHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};