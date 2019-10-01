/**
 * зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
 * 1. перебрати його циклом while */


let arr = [2,17,13,6,22,31,45,66,100,-18]

let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++
}

console.log('__________________________________');

console.log(arr.length);   /** виводить загальну кількість елементів

//arr.push('dima')          /** Додає значення в кінець масива */
//arr.pop()                 /** видаляє останнє значення з кінця масива*/
//arr.shift()               /** видаляє перше значення з масива*/
//arr.unshift('aaa')        /** заміняє перше значення масива на своє*/

// просто і --- виводить індекс 0,1,2,3....
// arr[i] --- виводить значення які лежать в масиві

// itar + tab = розгортає звичайний цикл
// iter + tab = розгортає цикл for + of

/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);*/


console.log('__________________________________');

/**  2. перебрати його циклом for */

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('__________________________________');

/** 3. перебрати циклом while та вивести  числа тільки з непарним індексом */

i = 0; // умова з якої починати цикл

while (i < arr.length) {

    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }

    i++ // це умова виходу з циклу, її треба записувати тільки в кінці Після 'if'
}

console.log('__________________________________');


/**4. перебрати циклом for та вивести  числа тільки з непарним індексом */

for (i = 0 ; i < arr.length; i++) {
    if (arr[i] % 2 !== 0)
        console.log(arr[i]);
} 


console.log('__________________________________');

/** 5. перебрати циклом while та вивести  числа тільки парні  значення */

i = 0;

while (i < arr.length) {
    if (arr[i] % 2 === 0)
        console.log(arr[i]);
    i++
}

console.log('__________________________________');

/**6. перебрати циклом for та вивести  числа тільки парні  значення */

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
        console.log(arr[i]);

}

console.log('__________________________________');

/** 7. замінити кожне число кратне 3 на слово "okten" */

/*for (i = 0; i < arr.length; i++) {
    if  (arr[i] % 3 === 0) {
        arr[i] = 'OKten'
    }
}
console.log(arr);*/

console.log('__________________________________');

/** 8. вивести масив в зворотньому порядку. */

// (let i = arr.length - 1; i >= 0;  i--) - перший спосіб

for (let i = 9; i >= 0; i--) {
    console.log(arr[i]);
}

console.log('__________________________________');

/** 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) */

for (let i = 9; i >= 0; i--) {
    if (arr[i] % 2 === 0)
        console.log(arr[i]);

}

console.log('__________________________________');

/**10 створити пустий масив та :
 * - заповнити його 50 парними числами за допомоги циклу.
 * - заповнити його 50 непарними числами за допомоги циклу. */

let arr2 = [];

 while (arr2.length < 20){
     let num = parseInt(Math.random() * 20);
     if (num % 2 === 0) {
        arr2.push(num)
     }
 }

console.log(arr2);

console.log('__________________________________');

let arr3 =[];

while (arr3.length < 20){
    let num = parseInt(Math.random() * 20);
    if (num % 2 !== 0) {
        arr3.push(num)
    }
}

console.log(arr3);

console.log('__________________________________');





/*
let arr2 = [];

while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random() * (732 - 8) + 8)
    if (randomNumber % 2 === 0) {
        arr2.push(randomNumber);
    }
}

console.log(arr2);
console.log(arr2.length);
*/

console.log('__________________________________');

/*
while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random() * (732 - 8) + 8)
    if (randomNumber % 2 !== 0) {
        arr3.push(randomNumber);
    }
}

console.log(arr2);
console.log(arr2.length);
*/


console.log('__________________________________');

// let arr3 = [];
//
// for (let i = 0; i < arr3.length; i += 3) {
//     let randomNumber = parseInt(Math.random() * (732 - 8) + 8)
//     if ()
// }
//
// console.log(arr3[i]);

// 2 таска

/*
let arr2 = [];

while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random() * (100 - 8) + 8)
        arr2.push(randomNumber);
}

for (let x = 0; x < arr2.length; x += 3) {
    console.log(arr2[x]);
}

*/

// 3 таска

/*
let arr2 = [];

while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random() * (100 - 8) + 8)
    arr2.push(randomNumber);
}

for (let x = 0; x < arr2.length; x += 3) {
    if (arr2[x] % 2 === 0)
        console.log(arr2[x]);

}
*/

// 4 таска

/*
let arr2 = [];

while (arr2.length < 50) {
    let randomNumber = parseInt(Math.random() * 100)
    arr2.push(randomNumber);
}

for (let x = 0; x < arr2.length; x += 3) {
    if (arr2[x] % 2 === 0)
        console.log(arr2[x]);
}

let arr3 = [];
arr2[x] = arr3.push(arr2);

console.log(arr3);


*/









