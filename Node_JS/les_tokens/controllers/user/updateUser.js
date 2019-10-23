const userService = require('../../service');

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const UserNew = req.body;

        const updatingUser = await userService.userService.updateUserService(id, UserNew);

        res.json('User updated');
    } catch (e) {
        res.status(400).json(e.message)
    }
};