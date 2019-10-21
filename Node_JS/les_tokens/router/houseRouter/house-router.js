const router = require('express').Router();

const {house} = require('../../controllers');
const {house: houseMiddleware} = require('../../middleware');

router.post('/', house.createHouse);
router.get('/:houseID', houseMiddleware.checkHousePresentMiddleware, house.houseById);
router.put('/:houseID', houseMiddleware.checkHousePresentMiddleware, house.updateHouses);
router.delete('/:houseID', house.deleteHouse);

module.exports = router;
