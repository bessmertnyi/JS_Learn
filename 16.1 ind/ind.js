// /*function calc(a, b, cb) {
//
//     if (cb === '+'){
//         let sum = a + b;
//         console.log(sum);
//
//     } else {
//         let min = a - b;
//         console.log(min);
//     }
//
//     setTimeout (() => {
//         cb(sum)
//     }, 500)
// }
//
// calc(15, 5, '-');*/
//
//
// function sort(a, cb) {
//
//     let xxx = cb();
//
//     if (xxx === '+') {
//         let x1 = a.sort(function (el1, el2) {
//             return el1 - el2;
//         });
//         console.log(x1);
//     }
//     if (xxx === '-') {
//         let x2 = a.sort(function (el1, el2) {
//             return el2 - el1;
//         });
//         console.log(x2);
//     }
// }
//
// sort([1, 2, 3, 4, 9, 8, 7, 6, 5], function () {
//     return '+'
// });
//
//
// /*
// let arr6 = [1, 2, 35, 67, 890, 56];
//
// function arrayFinder(arr6, cb) {
//     cb('-', arr6);
// }
//
// arrayFinder(arr6, function (filter, arr6) {
//     if (filter === '-') {
//         let sortedArr = arr6.sort( (el1, el2) => el1 - el2);
//         console.log(sortedArr);
//
//     } else {
//         throw  new Error("Error")
//     }
//
// });*/
//








/*
function cackProfi(a, b, cb) {

    let rrr = cb();

    if (rrr === "+") {
        let sum = a + b;
        console.log(sum);
        return 0
    } if (rrr === "-") {
        let min = a - b;
        console.log(min);
        return  0
    } else {
        throw new Error('bla bla')
    }
}

cackProfi(1,10, function (rrr) {
    return '+'
});
*/



function sort(arr, cb) {

    let ss = cb();

    if (ss === 'down') {
        arr.sort(function (el1, el2) {
            return el1 - el2
        });
        console.log(arr);
    }
    else {
        arr.sort ((el1,el2) => el2 - el1);
        console.log(arr);
    }
}
let arr = [456,451,54,134,65,234];

    sort(arr, function () {
    return 'up'
});


console.log(22);
console.log(22);
console.log(22);















