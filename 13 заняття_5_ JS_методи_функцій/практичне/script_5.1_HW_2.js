/** Створити обєкт автомобіля з полями:
 Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
 Власник автомобіля теж має бути обєкт, у якого є поля
 Імя, вік, стаж водіння.
 Створити не менше 7 та не більше 20 машинок.

 1. Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
 2. На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
 3. Для початку вкладіть всі наші створені автомобілі в масив cars.
 4. Далі необхідно дати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
 5. Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
 6. Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі */

let cars = [
    {
        model: 'VW Passat',
        enginePowerHP: 140,
        owner:{
            name: 'Mykhailo',
            age: 52,
            expYears: 30
            },
        price: 35000,
        year: '2014'
    },
    {
        model: 'Skoda Fabia',
        enginePowerHP: 105,
        owner: {
            name: 'Taras',
            age: 28,
            expYears: 12,
        },
        price: 8500,
        year: '2011'
    },
    {
        model: 'Fiat Doblo',
        enginePowerHP: 95,
        owner: {
            name: 'Oleg',
            age: 25,
            expYears: 6
        },
        price: 6500,
        year: '2007'
    },
    {   model: 'Ford Transit',
        enginePowerHP: 90,
        owner: {
        name: 'Nazar',
            age: 26,
            expYears: 4
        },
        price: 2000,
        year: '2000'
    },
    {
        model: 'Mercedes E225',
        enginePowerHP: 170,
        owner: {
            name: 'Oleksiy',
            age: 21,
            expYears: 2
        },
        price: 3500,
        year: '2000'
    },
    {
        model: 'Lada 21011',
        enginePowerHP: 80,
        owner: {
            name: 'Yan',
            age: 24,
            expYears: 5
        },
        price: 1500,
        year: '1976'
    },
    {
        model: 'Seat Leon',
        enginePowerHP: 230,
        owner: {
            name: 'Bogdan',
            age: 31, expYears: 4
        },
        price: 8000,
        year: '2008'
    },
    {
        model: 'Honda Civic',
        enginePowerHP: 300,
        owner: {
            name: 'Artur',
            age: 24,
            expYears: 6
        },
        price: 10000,
        year: '2010'
    },
    {
        model: 'Hyndai Sonata',
        enginePowerHP: 130,
        owner: {
            name: 'Sergiy',
            age: 47,
            expYears: 23
        },
        price: 8000,
        year: '2009'
    },
    {
        model: 'Mersedes W140',
        enginePowerHP: 250,
        owner: {
            name: 'Oleksandr',
            age: 35,
            expYears: 12},
        price: 10000,
        year: '1995'
    },
    {
        model: 'BMW 735',
        enginePowerHP: 300,
        owner: {
            name: 'Dmytro',
            age: 34,
            expYears: 14
        },
        price: 15000,
        year: '2003'
    },
    {
        model: 'Ford Focus',
        enginePowerHP: 200,
        owner: {
            name: 'Evgeniy',
            age: 28,
            expYears: 3
        },
        price: 30000,
        year: '2018'
    },
    {
        model: 'Tesla model S',
        enginePowerHP: 400,
        owner: {
            name: 'Vasyl',
            age: 52,
            expYears: 30
        },
        price: 50000,
        year: '2018'
    },
    {
        model: 'Chevrolet Aveo',
        enginePowerHP: 95,
        owner: {
            name: 'Mykola',
            age: 23,
            expYears: 4},
        price: 5000,
        year: '2008'
    },
    {
        model: 'Ford Mustang',
        enginePowerHP: 333,
        owner: {
            name: 'Ivan',
            age: 29,
            expYears: 8
        },
        price: 28000,
        year: '2015'
    },
    {
        model: 'Audi A3',
        enginePowerHP: 150,
        owner: {
            name: 'Sviatoslav',
            age: 25,
            expYears: 2},
        price: 8500,
        year: '2008'
    },
    {
        model: 'Moskvich 412',
        enginePowerHP: 60,
        owner: {
            name: 'Roman',
            age: 26,
            expYears: 3
        },
        price: 1000,
        year: '1974'
    },
    {
        model: 'KRAZ',
        enginePowerHP: 400,
        owner: {
            name: 'Valeriy',
            age: 34,
            expYears: 2
        },
        price: 20000,
        year: '1975'
    },
    {
        model: 'Hummer H1',
        enginePowerHP: 450,
        owner: {
            name: 'Ira',
            age: 19,
            expYears: 1
        },
        price: 50000,
        year: '2010'
    },
    {
        model: 'Smart',
        enginePowerHP: 110,
        owner: {
            name: 'Oleksandr',
            age: 20,
            expYears: 1
        },
        price: 15000,
        year: '2010'
    },
];

/** 1. Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів
 * на 10% (переприсвоєння змінної потужності). */

cars.forEach(function (value, index) {
    console.log(value.enginePowerHP, value.price, value.owner.name, value.owner.expYears);

});


let anotherHP =[];

for (i = 0; i < cars.length; i += 2){
    anotherHP.push(parseInt(cars[i].enginePowerHP * 1.1));
    // console.log(cars[i].enginePowerHP);
}

console.log(anotherHP);



let anotherPrice =[];

for (i = 0; i < cars.length; i += 2){
    anotherPrice.push(parseInt(cars[i].price * 1.05))
}
console.log(anotherPrice);


for (i = 0, j = 0; i < cars.length && i < anotherHP.length; i = i + 2, j++){
        cars[i].enginePowerHP = anotherHP[j]
}

for (i = 0, j = 0; i < cars.length && i < anotherPrice.length; i = i + 2, j++){
        cars[i].price = anotherPrice[j]
}

console.log('----------------------------');

/** 2. На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій). */

let newName = ['Hasan', 'Abdullah', 'Saad', 'Arsalan', ' Kashif', 'Haseeb', 'Umair', ' Waqas', 'Riaz', ' Asad'];

console.log(newName);

for (i = 0, j = 0; i < cars.length && i < newName.length; i = i + 2, j++){
    cars[i].owner.name = newName[j]
}

console.log('----------------------------');


cars.forEach(function (value, index) {
    console.log(value.enginePowerHP, value.price, value.owner.name);

});


/** 5. Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший
 * за 5 років, але його вік більший за 25, то необідно відправити його на курси
 * підвищення кваліфікації, що збільшить йому досвід на 1 рік.*/

let newExp = [];

for (i = 0; i < cars.length; i++){
    if (cars[i].owner.expYears < 5 || cars[i].owner.age > 25){
        newExp.push(cars[i].owner.expYears = cars[i].owner.expYears + 1)
    }
}

console.log(newExp);