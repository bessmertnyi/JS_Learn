/** Таска --> ДРУКАРСЬКА МАШИНКА */

let str = 'Hello';
let i = 0;

function druk(str) {

    let delay = parseInt(Math.random() *(1000-100)+100);

    setTimeout(()=> {

        if (i < str.length + 1) {
            console.clear();
            console.log(str.slice(0,i));
            i++;
            druk(str);
        }


    }, delay)
}
druk(str);


/** 2 - TASKA* */

/*for(var i = 1; i < 10; i++) {
    setTimeout (function() {
        return i
   }, 0);
    console.log(i);
}*/


