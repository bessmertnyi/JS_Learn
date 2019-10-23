const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;

        const createHouse = await houseService.createHouseService(houseToCreate);

        res.json('create new house')
    } catch (e) {
        res.json(e.message)
    }
};

