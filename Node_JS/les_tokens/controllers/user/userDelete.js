const db = require('../../database').getInstance();

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const modelOfUser = db.getModel('User');

        modelOfUser.destroy({
            where: {
                id: id
            }
        });

        res.json(`user with ${id} has been delete`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};