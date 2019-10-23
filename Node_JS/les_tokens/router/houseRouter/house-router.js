const router = require('express').Router();

const {house} = require('../../controllers');
const {house: houseMiddleware} = require('../../middleware');

router.post('/', house.createHouse);
router.get('/:id', houseMiddleware.checkHousePresentMiddleware, house.houseById);
router.put('/:id', houseMiddleware.checkHousePresentMiddleware, house.updateHouses);
router.delete('/:id', house.deleteHouse);

module.exports = router;
