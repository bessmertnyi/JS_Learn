// const {provider} = require('../../dataBase');
//
// module.exports = async (req, res, next) => {
//     try {
//         const {id} = req.params;
//         const query = 'SELECT * FROM client WHERE id = ${id}';
//         const [isUserPresent] = await provider.promise().query(query);
//
//         if (!isUserPresent.length) {
//             throw new Error(`user wight ${id} is not present`)
//         }
//         req.user = isUserPresent;
//
//         next();
//     } catch (e) {
//         res.json(400).json(e.message)
//     }
// };




/*
module.exports = (req, res, next)=> {

    try {
        const { id } = req.params;

        const isUserPresent = users.find(user => user.id === +user.id);  // береться з бази даних

        if(!isUserPresent){
            throw new Error(`user wight ${id} is not present`)
        }

        req.user = isUserPresent;
        next();
    } catch (e) {
        res.json(400).json(e.message)
    }

};*/
