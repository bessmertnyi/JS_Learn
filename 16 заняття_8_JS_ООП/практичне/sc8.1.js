/** 1.создать класс которы описывает Пользователя. класс должен содержать 7-9 полей и функцию toString()
 которая возвращает инфрмацию про экземпляр класса.
 создать 10 различных экземпляров.
 - создать сортировку по каждому полю отдельно
 - создать фильтрацию по каждому полю отдельно
 (протокол фильтрации придумать самостоятельно. он будет зависить от ваших полей) */

class User {
    constructor(name, age, sex, weight, height, profession, uducation, car) {

        this.name = name;
        this.age = age;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
        this.profession = profession;
        this.uducation = uducation;
        this.car = car;
    }

    toString() {
        console.log(this);
    }

    // sort() {
    // let arrUser = [];
    // arrUser.push(this);
    //     console.log(arrUser);
    // arrUser = arr.sort(function (el1, el2) {
    //     return el1 - el2
    // });
    //     console.log();
    // }



}

let Taras = new User('Taras', 29, 'man', 75, 175, 'director', 'economic', true);
let Roman = new User('Roman', 25, 'man', 73, 175, 'economist', 'economic', true);
let Ira = new User('Ira', 32, 'woman', 50, 167, 'accountant', 'finance', false);
let Oksana = new User('Oksana', 26, 'woman', 55, 169, 'teacher', 'history', true);
let Vika = new User('Vika', 23, 'woman', 49, 162, 'HR', 'economic', false);

let xxx = [Taras, Roman, Ira, Oksana, Vika];


