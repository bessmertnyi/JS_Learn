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

let arrPopelushka = [Vika, Oksana, Solya, Natalja, Lilja];

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

let arrPrinc = [Roman, Taras, Dimas, Victor, Nazar];


arrPopelushka.map(function (value) {
    console.log(value.size, value.name);
});


let xxx = arrPopelushka.map(function (value) {
    return value.size
});
let yyy = arrPrinc.map(function (value) {
    return value.tuflia
});
console.log(xxx);
console.log(yyy);


// === arrPrinc.map(value => value.tuflia) {



arrPrinc.forEach((xxx,yyy) => {
    xxx.tuflia.findIndex(xxx.tuflia === yyy.size);
    console.log(xxx.tuflia);
});
