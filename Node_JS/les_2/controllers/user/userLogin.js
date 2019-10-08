module.exports = (req, res) => {
    const log = req.body;

    const foundUser = users.find(search => search.userName === log.name && search.userPassword === log.password);
    foundUser ? res.redirect(`/user/${foundUser.user_id}`) : res.status(404).render('NOT PAGE, 404')
};