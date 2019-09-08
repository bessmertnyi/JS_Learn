

/*function flattenArray(arr) {

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

flattenArray([1,2,3,4,5,[10,20,30,[100,[1000,2000],200,300],40,50],6,7,8]);*/





function recursator3000(masyv) {

    masyv.forEach(value => {

        if (Array.isArray(value)){
            recursator3000(value);
            return;
        }
        if (typeof value === "object" && typeof value !== null){
            let ob = Object.values(value);
            recursator3000(ob);
            return;
        }
        console.log(value);
    });

}

let arr1 = [1,2,{name: 'Taras', car: false},3,4,5,[10,20,30,[100,200,300],40,50],6,7,8];
recursator3000(arr1);
