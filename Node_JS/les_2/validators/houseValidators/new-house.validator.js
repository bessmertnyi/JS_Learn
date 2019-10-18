module.exports = houseObject => {
    const {square, city, price} = houseObject;

    if (!square || !city || !price){
        throw new Error('House is not valid')
    }
};
