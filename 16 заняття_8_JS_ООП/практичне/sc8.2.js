/** задачка про попелюшку */

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Vika = new Popelushka('Vika', 23, 36);
let Oksana = new Popelushka('Oksana', 30, 38);
let Solya = new Popelushka('Solya', 35, 37);
let Natalja = new Popelushka('Natalja', 25, 35);
let Lilja = new Popelushka('Lilja', 29, 39);



class Princ {
    constructor(name, age, tuflia){
        this.name = name;
        this.age = age;
        this.tuflia = tuflia;
    }
}

let Roman = new Princ('Roman', 25, 35);
let Taras = new Princ('Taras', 29, 36);
let Dimas = new Princ('Dimas', 24, 37);
let Victor = new Princ('Victor', 23, 38);
let Nazar = new Princ('Nazar', 32, 39);

let arrPopelushka = [Vika, Oksana, Solya, Natalja, Lilja];
let arrPrinc = [Roman, Taras, Dimas, Victor, Nazar];
let mar = [];


/*function sutyner(a, b) {

    for (i = 0; i < arrPopelushka.length; i++){
        for (j = 0; j < arrPrinc.length; j++){
            if (arrPopelushka[i].size === arrPrinc[j].tuflia) {
                mar.push(arrPrinc[j].name, '+', arrPopelushka[i].name);
            }
        }
    }
}

sutyner(arrPopelushka, arrPrinc);
console.log(mar);*/




    arrPrinc.forEach(function (valuePrinc) {
        arrPopelushka.findIndex(function (valuePopl) {
            if (valuePrinc.tuflia === valuePopl.size){
                console.log(valuePrinc.name, '+',  valuePopl.name);
            }
        })
    });









