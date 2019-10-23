const userService = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;

        const deletingUser = userService.userService.deleteUserService(id);

        res.json(`user with ${id} has been delete`)
    } catch (e) {
        res.status(400).json(e.message)
    }
};