                     /*ДОМАШНЄ*/
// Завдання №1 //

/*let a = 0;

if (+a === 0){
    console.log(true)
}  else{
    console.log(false)
}*/

// Завдання №2 //

// 1-й варіант  //

/*let min = +prompt("enter 0-59")

    switch (min) {
        case (min >= 0 && min < 15 && min) :
            console.log('persha');
            break;
        case (min >= 15 && min < 30 && min) :
            console.log('druga');
            break;
        case (min >= 30 && min < 45 && min) :
            console.log('tretja');
            break;
        case (min >= 45 && min < 59 && min) :
            console.log('4-ta');
            break;
        default :
         console.log('Next hour')
    }*/

// 2-й варіант //
/*

// let min = +prompt("0-59");
let min = Math.random() * 59;  // Рандомне значення //
console.log(min);

    if (min >= 0 && min < 15) {
        console.log('persha');
    }
    else if (min >= 16 && min <= 30) {
        console.log('druga');
    }
    else if (min >= 31 && min <= 45) {
        console.log('tretja');
    }
    else if (min >= 46 && min <= 59) {
        console.log('4-ta');
    }
    else {
        console.log('bad')
    }
*/


/*Завдання №3*/
/*

let a = +prompt("enter a");
let b = +prompt("enter b");

  if (a <= 1 && b >=3) {
      console.log(a + b)
  }
  else {
      console.log(a - b)
  }
*/

  // (a <= 1 && b >=3) ? console.log(a + b) : console.log(a - b)// - тернарний запис


/*Завдання №4*/
/*

let mouth = +prompt("enter 1-12");
//
// let mouth = Math.random() * (4 - 1) + 1;   // Рандомне значення але в межах 4
// mouth = mouth.toFixed(0); // забирає цифри після коми
// console.log(num);

    if (mouth >= 0 && mouth <= 2 || mouth ===12) {
        console.log('ЗИМА')
    }
    else if (mouth >= 3 && mouth <= 5) {
        console.log('ВЕСНА')
    }
    else if (mouth >= 6 && mouth <= 8) {
        console.log('ЛІТО')
    }
    else if (mouth >= 9 && mouth <= 11) {
        console.log('ОСІНЬ')
    }
*/


/*Завдання №5*/

/*
let num = +prompt("enter 1-4");

    switch (num) {
        case 1 :
          console.log('Зима');
        break;
        case 2 :
          console.log('Весна');
        break;
        case 3 :
          console.log('Літо');
        break;
        case 4 :
          console.log('Осінь');
        break;
    default :
          console.log('Anouther planet')
        break;
    }
*/

/*Завдання №6*/

/*
let num = +prompt("enter 1-12");
let result;

    switch (num) {

        case 1 :
            result = 'Січень';
        break;
    }
*/


                     /*З ЛЕКЦІЇ*/

// if (2 <= 5) {
//     console.log(true);
// }





/*let a = 25;
                    console.time('if')
if (a > 10) {
    console.log('a is bigger 10')

    if (a > 20) {
    console.log('a is bigger 20')
    }
} else if (a === 10) {
    console.log('PRIVET')
}
  else {
    console.log('E K A')
}
                    console.timeEnd('if')

console.log('I am here');
   */




/*let day = 25;
let month = 'winter';

if (day > 20 && month === 'winter' ) {
    console.log('New Year')
}*/


// i або //

/*
let login = 'Dima';
let password = '12345';
let role = 'admin';

if (login === 'Dima' && (password === '12345' || role === 'admin')) {
    console.log('login')
}*/


                    // S W I T C H //

// let poraRoku = 'win';
//
// switch (poraRoku) {
//     case 'spring' :
//         console.log('spring is coming');
//         break;
//     case 'winter' :
//         console.log('winter is coming');
//         break;
//     case 'summer' :
//         console.log('summer is coming');
//         break
//     default :
//         console.log('Another planet')
// }


                     // Тернарний запис//

/*
(poraRoku === 'winter') ? console.log(' SNOWING') : console.log('swimming')
*/

                     // Ц И К Л И //

// for (let i=0; i < 10; i++) {
//     console.log(i);
// }


                     // П Р А К Т И Ч Н Е //

/*
let n1 = +prompt("enter 1");
let n2 = +prompt("enter 2");
let n3 = +prompt("enter 3");


if (n1 <= n2 && n2 <= n3 && n3 >= n1) {            //123
    console.log(n1 + "" + n2 + "" + n3)
} else if (n2 >= n1 && n2 >= n3 && n1 >= n3) {     //231
    console.log(n3 + "" + n1 + "" + n2)
} else if (n1 >= n2 && n1 >= n3 && n2 >= n3) {    //321
    console.log(n3 + "" + n2 + "" + n1)
} else if (n1 >= n2 && n1 >= n3 && n3 >= n2) {    //312
    console.log(n2 + "" + n3 + "" + n1)
} else if (n1 <= n2 && n1 <= n3 && n3 <= n2) {    //1 3 2
    console.log(n1 + "" + n3 + "" + n2)
} else if (n2 <= n1 && n2 <= n3 && n1 <= n3) {    //2 1 3
    console.log(n1 + "" + n3 + "" + n2)

*/


/*

let SV = prompt("KOL_SVITLOFORA");

switch (SV) {
    case 'green' :
        console.log('go');
        break;

    case 'yellow' :
        console.log('pause');
        break;

    case 'red' :
        console.log('STOP');
        break;
    default :
        console.log('other');
}*/

/*let sv = prompt("KOL_SVITLOFORA");
let car  = confirm('if the car in the road');

if (sv === 'green' && car === true) {
    console.log('stop')
} else if (sv === 'green' && car === false) {
    console.log('go')
}

if (sv === 'yellow' && car === true) {
    console.log('pause')
} else if (sv === 'yellow' && car === false) {
     console.log('pause all')
}

if (sv === 'red' && car === true) {
    console.log('stop stop')
} else if (sv === 'red' && car === false) {
    console.log('Stop')
}
   else {
       console.log('go go go')
}*/




var arr = [1, 5, 4], arr2 = [4, 3, 2], arr3 = [];


for (i=0; i < arr.length; i++) {
    // цикл по всем элементам массива(-ов) (в данном случае учитывается что массивы равны по длине)

arr3.push(arr[i]+arr2[i]);
// метод push() добавляет элемент(-ы) в конец массива, в данном случае сумму i-ых элементов первого и второго массивов

                     }

console.log(arr3);



