const { provider } = require('../../database');

module.exports = async (req, res) => {

    const {id, square, city, price} = req.body;
    const query = `update house set price = '${price}', square = '${square}', city = '${city}' where id = ${id}`;

    await provider.promise().query(query);

    res.redirect('/updateHouse');
};