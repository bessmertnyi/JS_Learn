// Array.toString();
Array.prototype.newMetod = function () {
    console.log('Hello World');
}
arr = [1,2,3,4,5,6,7,8,9];

arr.newMetod();

/** Взять библиотечный класс Array и добавить ему новый метод который
 - выводит наименьший числовой элемент массива
 - выводит наименьший по размеру строчный элемент массива
 - выводит только объекты у которых присутствует поле id

 Создаем свои методы map, filter, foreach
 для класса Array, добовляя их через prototype */

/** - выводит наименьший числовой элемент массива */
Array.prototype.min = function () {
    console.log(Math.min(...this))
};
arr.min();
arr2 = [9,7,6];
arr2.min()
arr3 = [234,456,23,57];
arr3.min()

/** - выводит наименьший по размеру строчный элемент массива */

Array.prototype.minString = function () {
    console.log(this);
    console.log('----------------------------');

    let minLeng = this[0];
    for (let i = 0; i < this.length; i++) {
        if (minLeng.length > this[i].length){
            minLeng = this[i];
        }
    }
    console.log(minLeng);
};

arrSt = ['dg','qw','dfhfg','sgghfjgh','e','ewr','rt',1,2];
arrSt.minString();
console.log('----------------------------');

/**  - выводит только объекты у которых присутствует поле id */

arrayId = [
    {name: 'Olegyk', age: 20},
    {name: 'Taras', age: 29, id: 123},
    {name: 'Roman', age: 25, id: 321},
    {name: 'Oleg', age: 30}
];

Array.prototype.noId = function () {
    console.log(this);
    console.log('----------------------------');

    let result = this.filter(value => {
        if (value.id !== this.id){
            return true
        }
    });
    console.log(result);
};

arrayId.noId();


