/* Клас депутат(наслідується від людини):
поля:
    прізвище,ім'я,вік,хабарник?,розмі хабаря
методи:
    дати хабаря(зробити відповідні перевірки...
якщо депутат не хабарник то щоб він відмовився,
    або ж якщо сума хабаря надто велика то щоб він вагався
чи брати чи ні)*/

import {Human} from './human';

export class Deputat extends Human {
    firstName: string;
    lastName: string;
    age: number;
    grafter: boolean;
    sizeBribe: number;

    constructor(weight: number, height: number, firstName: string, lastName: string, age: number, grafter: boolean, sizeBribe: number) {
        super(weight, height);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grafter = grafter;
        this.sizeBribe = sizeBribe;
    }

    givHabar(money: number): void {
        if (!this.grafter) {
            console.log('i will not do than');
        } else (money > 100000) ? console.log('i will think') : console.log('i do not ')
    }
}