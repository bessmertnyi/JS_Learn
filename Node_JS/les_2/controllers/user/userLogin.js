
module.exports = (req, res) => {
    const {id} = req.validUser;

    res.redirect(`user/${id}`);
};