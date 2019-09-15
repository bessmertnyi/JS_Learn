function wakeUp() {
    return new Promise(resolve =>{
        setTimeout(() => {
        resolve('Wake Up')
    }, 1000)
    } )
}

// wakeUp()
//     .then(value => {
//         console.log(value);
//     });

function goEat() {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            resolve('Go to Eaten')
        },2000)
    })
}
// goEat()
//     .then(value => {
//         console.log(value);
//     });

function goWokr() {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve ('Go to Work')
        },3000)
    })
}

// goWokr()
//     .then(value => {
//         console.log(value);
//     });

function working() {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve ('Working')
        },5000)
    })
}

// working()
//     .then(value => {
//         console.log(value);
//     });

async function assyncFunc() {
    let first = await wakeUp();
    console.log(first);
    let second = await goEat();
    console.log(second);
    let third = await goWokr();
    console.log(third);
}
assyncFunc();
