const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        const createUser = await userService.createUserService(userToCreate);

        res.json('creat new user!')
    } catch (e) {
        res.json(e.message)
    }
};
