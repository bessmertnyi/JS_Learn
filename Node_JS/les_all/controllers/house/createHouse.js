const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const houseToCreate = req.body;
        const modelOfHouse = db.getModel('House');

        await modelOfHouse.create(houseToCreate);

        res.json('create new house')
    } catch (e) {
        res.json(e.message)
    }
};

