/* * -primities
 * number
 * strung
 * boolean
 * undefined
 *
 * -reference
 * object
 * null
 * Symbol
 *!/*/

// TODO підказки:

// Object.values  + arguments -> виводить значення  з масива
// Object.keys    + arguments -> виводить індекси  з масива

// в середині в функції є --- АРГУМЕРТИ (може бути безліч)
// виводить - c.log
// повертає - return
// ctr + alt + shift + j  ---> виділяє всі однакові значення і міняє їх

/** S U M A T O R */

/*function sumator(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('bla    bla')
    }
    console.log(a, b);
}
sumator(9,2)*/


/** 1. приймає три числа та виводить та повертає найменьше. */

function firstTask(n1, n2, n3) {
    const biggest = Math.max(n1, n2, n3);
    console.log(biggest);

    return biggest + 100;
}
let biggest = firstTask(10,20,30,)
console.log(biggest);


console.log('__________________________________');

/** 2. приймає три числа та виводить та повертає найбільше. */

function secondTask(n1,n2,n3) {
    let minim = Math.min(n1,n2,n3)
    console.log(minim);

    return minim
}

let minim = secondTask(10,20,30)
console.log(minim);


console.log('__________________________________');

/** 3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше  */

function threeTask () {
    let values = Object.values(arguments)
    console.log(values);

    let max = values[0];

    for (i = 0; i < values.length; i++) {
        if (max < values[i]){
            max = values[i]
        }

    }
    console.log(max);

    let min = values[0];

    for (const i of values) {
        if (min > i) {
            (min = i)
        }

    }
    console.log(min);
    return min
}

let min = threeTask(234,345,34,546,657,78)
console.log(min);

console.log('__________________________________');

/** 4. виводить масив */

function fourTask () {
    console.log(Object.values(arguments));
}
fourTask(2,3,5,6,56,4,53,45)

console.log('__________________________________');

/** 5. повертає найбільше число з масиву */

/*
function fiveTask () {
    let values = (arguments);

    console.log(values);
    console.log(Object.values(values));
    console.log(...values); // СПРЕД ...

    let a = Math.max(...values)
    console.log(a);

    return a

}
let a = fiveTask(30,40,60)
console.log(a);
*/

function fiveTask () {
    let values = Object.values(arguments)
    console.log(values);

    let bigger = values[0];

    for (i = 1; i < values.length; i++) {
        if (bigger < values[i]) {
            (bigger = values[i])
        }

    }
    console.log(bigger);
    return bigger
}

let bigger = fiveTask(345,67,23543,769,345,124,547,679)
console.log(bigger);

console.log('__________________________________');

/** 6. повертає найменьше число з масиву */

function sixTask () {
    let values = Object.values(arguments)

    let minims = values[0]

    for (let i of values) {
        if (minims > i) {
            (minims = i)
        }

    }
    console.log(minims);
    return minims
}

let minims = sixTask(9,567,789,1,6);
console.log(minims);

console.log('__________________________________');



/** 8. приймає масив та число (i). та міняє місцями об`єкт який знаходиться
 *  в індексі "i" на "i+1" */

function lastTask(array, i) {
    if (!Array.isArray(array) || typeof i !== 'number'){
        throw new Error('somesing is not ok')
    }
    if (i < 0 || i > array.length -1) {
        throw new Error('bad number')
    }

    let valueToChange = array[i]

    array[i] = array[i+1]
    array[i+1] = valueToChange

    console.log(array);
}

lastTask([1,2,3,4,5],1)

console.log('__________________________________');

