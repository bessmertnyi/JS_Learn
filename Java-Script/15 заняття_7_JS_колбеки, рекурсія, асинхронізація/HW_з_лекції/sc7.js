



// let i = 0;
// let xxx = [];
//
// function disband () {
//
//     if (Array.isArray(arr[i])) {
//
//             return xxx.flat(0);
//
//         // if (i < arr.length) {
//         //
//         //     console.log(arr[i]);
//         //     i++;
//
//
//         disband();
//
//     }
//
// }
//
// disband();
// console.log(xxx);

function flattenArray(arr) {

    let newArr = [];

    function flatten(arr, newArr) {

        for (i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i]) === false) {
                newArr.push(arr[i]);
            }

            else {
                flatten(arr[i], newArr);
            }
        }
    }

    flatten(arr, newArr);

    console.log(newArr);
}

flattenArray([1,2,3,4,5,[10,20,30,[100,[1000,2000],200,300],40,50],6,7,8]);




// let arr = [1,2,3,4,5,[10,20,30,[100,200,300],40,50],6,7,8];



