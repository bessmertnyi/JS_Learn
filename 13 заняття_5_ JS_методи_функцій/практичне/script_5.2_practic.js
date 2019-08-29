/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */

let firstTask = [1, 2, 3, 4, 5];

firstTask.splice(1, 2);

console.log(firstTask);

/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый
 * массив элементы [2, 3, 4].*/

let secondTask = [1, 2, 3, 4, 5];

let secondTask2 = secondTask.splice(1,3);

console.log(secondTask2);

/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
 * [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

let thirdTask = [1, 2, 3, 4, 5];

thirdTask.splice(3, 0 , 'a', 'b', 'c');

console.log(thirdTask);

/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
 * массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */

let fourthTask = [1, 2, 3, 4, 5];

fourthTask.splice(1, 0, 'a', 'b');
fourthTask.splice(6, 0, 'c');
fourthTask.splice(8, 0, 'e');


console.log(fourthTask);

/** - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его */

let fifthTask = [3, 4, 1, 2, 7];

let sort = fifthTask.sort(function (el1, el2) {
    return el1 - el2
});

console.log(sort);

/** - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */

let sixthTask = {
                js:'test',
                jq: 'hello',
                css: 'world'
};

let sixthTaskArrKey = Object.keys(sixthTask);

console.log(sixthTaskArrKey);

/** last task */

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

/**  - 1 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
 індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
 це в новий масив (первинний масив залишиться без змін)
     - 2 відсортувати його за індентифікатором */

console.log(users);
console.log('______________________________________________');


let newUsers = JSON.stringify(users);
newUsers = JSON.parse(newUsers);



for (i = 0; i < newUsers.length; i++){
    newUsers[i].id = +makeid(3)
}

/** Р А Н Д О М - можна задати цифри, букви і потім к-сть символів !!! */

function makeid(length) {
    let result           = '';
    let characters       = 'ABCDFGTR1234567890';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/** - 2 відсортувати його за індентифікатором */

newUsers.sort(function (el1, el2) {
    return el1.id - el2.id
});

console.log('______________________________________________');
console.log(newUsers);

console.log('______________________________________________');

// Array.prototype.pushArray = function() {
//     var toPush = this.concat.apply([], arguments);
//     for (var i = 0, len = toPush.length; i < len; ++i) {
//         this.push(toPush[i]);
//     }
// };

console.log(users);

console.log('______________________________________________');

let newArr = [];

for (i = 0; i < users.length; i++){
    let randomNumber = Math.random()*10;
    newArr.push({name:users[i].name, age:users[i].age, status:users[i].status, id:makeid(3) });
    // newArr.push(id = +makeid(2))
}
console.log(newArr);

//, age:users[i].age, status:users[i].status