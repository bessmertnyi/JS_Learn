const { provider } = require('../../database');

module.exports = async (req, res) => {

    const {id, name, email, password} = req.body;
    const query = `update user set name = '${name}', email = '${email}', password = '${password}' where id = ${id}`;

    await provider.promise().query(query);

    res.redirect('/updateUser');
};