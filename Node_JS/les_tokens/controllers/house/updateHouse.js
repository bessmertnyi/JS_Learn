const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const houseNew = req.body;

        const updatingHouse = await houseService.updateHouseService(id, houseNew);

        res.json('house updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};