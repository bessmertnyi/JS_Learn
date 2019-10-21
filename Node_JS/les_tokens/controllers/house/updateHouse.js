const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {houseID} = req.params;
        const houseNew = req.body;
        const houseModel = db.getModel('House');

        await houseModel.update(houseNew, {
            where: {
                id: houseID
            }
        });

        res.json('house updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};