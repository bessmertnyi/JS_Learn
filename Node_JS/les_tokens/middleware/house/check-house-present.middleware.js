const {houseService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;

        const presentHouse = await houseService.checkHousePresentService(id);

        if (!presentHouse) {
            throw new Error(`house with ${id} is not present `)
        }

        req.house = presentHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};