/** 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
 диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!) */

let arr = [];
let arr2 = [];

while (arr.length < 7){
    let num = parseInt(Math.random()* (732 - 1) + 8); // заданий діапазон з і до
    arr.push(num)
}

console.log(arr);

console.log('__________________________________');

/** 2. вывести на консоль  каждый третий елемент */

for (i = 0; i < arr.length; i += 3){
    console.log(arr[i]);
}

console.log('__________________________________');

/** 3. вывести на консоль  каждый третий елемент
 но при условии что его значение является парным. */

for (i = 0; i <arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

console.log('__________________________________');

/** 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
 записать их в другой массив. */

for (i = 0; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        // console.log(arr[i]);
        arr2.push(arr[i]);
    }
}
console.log(arr2);

console.log('__________________________________');

/**  5. Вывести каждый елемент массива у которого соседний с права элемент - парный  */

for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0)
        console.log(arr[i - 1])
}

console.log('__________________________________');

/** 5 масив з числами [100,250,50,168,120,345,188],
 * Які характеризують вартість окремої покупки. обрахувати середній чек. */

let arr3 = [100,250,50,168,120,345,188]

// П Е Р Ш И Й   В А Р І А Н Т
// let i = 0;
// let sum = 0;
//
// while (i < arr3.length) {
//     sum = sum + arr3[i]
//     i++
// }
// console.log(sum);

// Д Р У Г И Й   В А Р І А Н Т
let sum = 0;
for (i = 0; i < arr3.length; i++){
    sum = sum + arr3[i];
}
console.log(sum);

let aaa = sum/arr3.length

console.log(aaa.toFixed(1)); // toFixed - обрізає значення після коми

console.log('__________________________________');

/** 3. створити масив з рандомними значеннями, помножити всі його елементи на 5 та
 * перемістити їх в інший масив. */

let arr4 = [];
let arr5 = [];

while (arr4.length < 7){
    let rand = +(Math.random()*10).toFixed(0);
    arr4.push(rand);
}
console.log(arr4);


for (i = 0; i < arr4.length; i++) {
    let mul = arr4[i] * 5;
    console.log(mul);
    arr5.push(mul)
}
console.log(arr5);

console.log('__________________________________');

/** 4. створити масив з будь якими значеннями (стрінги, числа, і тд...).
 * пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив. */

let arr6 = [3, 'aaa', 'bbb', 23, 45, 999, false, 'ccc']
let arr7 = [];

for (i = 0; i < arr6.length; i++) {
    if (typeof (arr6[i]) === "number") {
    arr7.push(arr6[i])
    }
}

console.log(arr7);

console.log('__________________________________');

