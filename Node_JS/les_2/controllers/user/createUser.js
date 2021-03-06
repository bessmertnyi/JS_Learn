const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `INSERT INTO user (name, email, password) VALUE (?, ?, ?)`;

    await provider.promise().query(query, [name, email, password]);

    res.render('register')
};
