function userCard(num) {

    let option = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: num,
    };

    return {
        getCardOptions: function () {
            console.log(option);
        },

        putCredits: function (plusCredits) {   // додаємо
            option.balance += plusCredits
        },

        takeCredits: function (minusCredits) {  // забираємо
            if (option.balance + option.transactionLimit < minusCredits) {
                throw new Error('NO MONEY')
            }
            option.balance -= minusCredits
        },

        setTransactionLimit: function (limitPlus) {
            option.transactionLimit = limitPlus
        },

        transferCredits: function (transfer, anotherCards) {
            if ((option.balance + option.transactionLimit) <= transfer){
                throw new Error('Завеликий запрос, нема ліміту')
            }
            anotherCards.putCredits(transfer);
            option.balance -= (transfer + (transfer * 0.05))
        }
    }
}
const card3 = userCard(3);

card3.getCardOptions();
card3.putCredits(150);
card3.getCardOptions();
card3.takeCredits(100);
card3.getCardOptions();
card3.setTransactionLimit(5000);
card3.getCardOptions();
card3.takeCredits(100);
card3.getCardOptions();

console.log('____________________________');

const card1 = userCard(1);

card1.getCardOptions();
card3.transferCredits(50, card1);

console.log('____________________________');

card3.getCardOptions();
card1.getCardOptions();

