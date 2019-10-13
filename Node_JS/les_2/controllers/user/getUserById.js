module.exports = (req, res) => {
    const user = req.goodLog;

    res.json(user);
};





// module.exports = (req, res) => {
//     const userSearch = users.find(ses =>
//         +req.params.userId === ses.user_id
//     );
//     userSearch ? res.json(userSearch) : res.status(400).render('not find');
// };

// module.exports = (req, res) => {
//
//     const user = req.user; // приходить з middleware
//
//     res.json(user);
// }


/*
(req, res) => {
    const houseSearch = houses.find(oeo =>
        +req.params.id === oeo.house_id
    );
    console.log(req.params);
    res.json(houseSearch);
});*/
