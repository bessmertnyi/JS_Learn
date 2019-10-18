module.exports = (req, res) => {
    const house = req.houseValidId;

    res.json(house)
};