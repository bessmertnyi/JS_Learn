const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        const deleteHouse = await houseService.deleteHouseService(id);

        res.json(`house with ${id} has been delete`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};