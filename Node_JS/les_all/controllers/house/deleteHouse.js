const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const modelOfHouse = db.getModel('House');

        modelOfHouse.destroy({
            where: {
                id: houseID
            }
        });

        res.json(`house with ${houseID} has been delete`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};