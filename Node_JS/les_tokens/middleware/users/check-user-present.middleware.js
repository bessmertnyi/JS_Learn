const {userService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.params;
        const presentUser = await userService.checkUserPresentService(id);

        if (!presentUser) {
            throw new Error(`user id ${id} is not present`)
        }

        req.user = presentUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};