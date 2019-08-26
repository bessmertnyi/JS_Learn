/** ТАСКИ З ПРАКТИЧНОГО */

/** 1.  створити функцію яка виводить масив */

function arr() {
    let arrNew = Object.values(arguments)
    console.log(arrNew);
    return arguments
}

// arr(pushing())

console.log('__________________________________');


/*function array () {
    let arrLet = Object.values(array);

    console.log(arrLet);
}*/


/** 2 створити функцію яка заповнює масив рандомними числами та виводить його.  */

function pushing() {

    let xxx = []

    while (xxx.length < 5) {
        let randomNumber = +(Math.random() * 5).toFixed(0)
        xxx.push(randomNumber)
    }

    // console.log(xxx);

    return xxx

}

pushing()

console.log('__________________________________');

/** 3 створити функцію яка знаходить найбільше число в масиві.
 * Для створення масиву використати  попередню функцію */


function findMaxNumber() {

    let array = pushing()
    let bigger = Math.max(...array)
    console.log(...array);
    return bigger

}

arr(findMaxNumber());

console.log('__________________________________');

/** 4 --//-- яка скаладає значення елементів масиву та повертає його. */

function sumatorArr() {

    let plus = pushing()

    let sum = 0
    for (let i = 0; i < plus.length; i++) {
        sum = sum + plus[i]

    }
    console.log(plus);
    return sum
}

arr(sumatorArr())

console.log('__________________________________');

/**   5 --//-- яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
 Приклад
 [1,2,3,4]
 [2,3,4,5]
 результат
 [3,5,7,9] */

function fiveTask() {

    let arr1 = pushing();
    let   arr2 = pushing();
    let   arr3 = [];

    for (i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]+arr2[i]);
    }
    console.log(arr1);
    console.log(arr2);

    return arr3
}

arr(...fiveTask())

console.log('----------------------------');

/** 6 --// -- яка буде переносити елементи з значенням 0 у кінець маисву.
 Зберігаючи при цьому порядок не нульових значень.
 Двожина масиву від 2 до 100
 Приклад
 [1,0,6,0,3] => [1,6,3,0,0]
 [0,1,2,3,4] => [1,2,3,4,0]
 [0,0,1,0]   => [1,0,0,0] */

function sixTask() {

    let array = [2, 0, 3, 7, 0, 3, 1]
    let resultArray = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            resultArray.push(array[i])
        }
    }
    for (i = array.length - 1; i >= 0; i--) {
        if (array[i] !== 0) {
            resultArray.unshift(array[i])
        }

    }

    return resultArray
}

arr(...sixTask())
 