// TODO домашнє

/** - Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. */

let arr = ['a', 'b', 'c'];
let arr2 = [1,2,3];

let allArr = arr.concat(arr2);
console.log(allArr);

console.log('----------------------------');

/** - Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. */

// перший спосіб

let numberArr = arr.concat(1,2,3);
console.log(numberArr);

// другий спосіб


arr.splice(3,0, 1,2,3);
console.log(arr);

console.log('----------------------------');

/** - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */

let arr123 = [1,2,3];
let reversed =arr123.reverse();
console.log(reversed);

console.log('----------------------------');

/** -  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. */

let  arr112233 = [1,2,3]
arr112233.splice(3,0, 4,5,6);
console.log(arr112233);

console.log('----------------------------');

/** - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.  */

// Перший спосіб
let arr1234 = [1,2,3];
// arr1234.splice(0, 0, 4,5,6);
// console.log(arr1234);

// другий спосіб
arr1234.unshift(4,5,6);
console.log(arr1234);

console.log('----------------------------');

/** - Дан массив ['js', 'css', 'jq'].
 * Выведите на экран первый элемент при помощи shift */

let js = ['js', 'css', 'jq'];

let firstValue = js.shift(js[0]);
console.log(firstValue);

console.log('----------------------------');

/** - Дан массив ['js', 'css', 'jq'].
 * Выведите на экран последний элемент при помощи pop */

let jq = ['js', 'css', 'jq'];

let lastValue = jq.pop(jq[jq.length]); // --- jq.length - бере останній елемент
console.log(lastValue);

console.log('----------------------------');

/** - slice. Дан массив [1, 2, 3, 4, 5].
 * С помощью метода slice запишите в новый элементы [1, 2, 3]. */

let arr12345 = [1, 2, 3, 4, 5];

let newArr = arr12345.slice(0,3);
console.log(newArr);

console.log('----------------------------');


/** - slice. Дан массив [1, 2, 3, 4, 5].
 * С помощью метода slice запишите в новый элементы */

let lastNewArr = arr12345.slice(0,arr12345.length);
console.log(lastNewArr);
