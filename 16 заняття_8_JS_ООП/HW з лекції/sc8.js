/** 1.создать класс которы описывает машину. класс должен содержать
 * 5-6 полей и функцию info() которая выводит инфрмацию про экземпляр класса (объект который вы создали)
 создать 10 различных экземпляров
 2. Унаследовать класс Car в классе SuperCar. Добавить 3 новых поля.
 создать 10 различных экземпляров

 на основе предыдущего задания создать классы которые описывают
 - Продукт
 - категорию
 - Магазин */


class Car {

    constructor(make, model, year, fuel, engine, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.engine = engine;
        this.color = color;
    }

    info () {                // та сама ф-ція, але в класах називається "МЕТОД"!
        console.log(this)
    }

}

let passat = new Car('vw', 'passat', 2019, 'disel', 2, 'white');
let polo = new Car('vw', 'polo', 2015, 'gasoline', 1.2, 'red');
let jetta = new Car('vw', 'jetta', 2018, 'gasoline', 2.5, 'black');
let a6 = new Car('audi', 'a6', 2015, 'disel', 3, 'black');
let a4 = new Car('audi', 'a4', 2011, 'disel', 2, 'blue');
let q5 = new Car('audi', 'q5', 2017, 'disel', 2, 'black');
let octavia = new Car('skoda', 'octavia', 2014, 'disel', 2, 'white');
let fabia = new Car('skoda', 'fabia', 2011, 'disel', 1.6, 'grey');
let superb = new Car('skoda', 'superb', 2013, 'gasoline', 2, 'silver');
let kodiaq = new Car('skoda', 'kodiaq', 2019, 'disel', 2, 'black');


class SuperCar extends Car {
    constructor (make, model, year, fuel, engine, color, transmission, price) {
        super (make, model, year, fuel, engine, color);
        this.transmission = transmission;
        this.price = price;
    }
}

let focus = new SuperCar('ford','focus', 2017, 'gasoline', 2.5, 'white', 'AT', 13000);
let kuga = new SuperCar('ford','kuga', 2015, 'disel', 2, 'grey', 'MT', 12500);

passat.info();
console.log('_____________________________');
kuga.info();

