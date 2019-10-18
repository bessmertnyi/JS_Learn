module.exports = (req, res) => {
    const {id} = req.houseValid;

    res.redirect(`house/${id}`)
};



/*app.post('/search', (req, res) => {
    const info = req.body;

    const foundHouse = houses.find(search => search.city === info.city);
    foundHouse ? res.redirect(`/house/${foundHouse.house_id}`) : res.status(404).render('NOT PAGE, 404')
});*/
