const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const findingUser = await authService.authServiceFindingUser(email, password);

        if (!findingUser) {
            throw new Error('incorrect login or password')
        }

        req.user = findingUser;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
