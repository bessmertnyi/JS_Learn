/* Клас фракція
поля:
    список депутатів
методи:
    додати депутата (вводимо з клави)
видалити депутата(теж з клави)
видалити всіх негідників які брали хабаря
вивести найбільшого хабарника
вивести всіх депутатів
видалити всіх депутатів
вивести загальну суму хабарів для фракції */

import {Deputat} from "./deputat";

export class Frakcia {

    listDeputat: Deputat[] = [];

    constructor(listDeputat: Deputat[]) {
        this.listDeputat = listDeputat;
    }

    addDeputat(newDep: Deputat) {
        this.listDeputat.push(newDep);
        console.log(`new deputat {newDep} add`)
    };

    delDeputat(lastName: string) {
        const findDep = this.listDeputat.findIndex((dep: Deputat) => dep.lastName === lastName);
        if (findDep < 0) {
            console.log('dep is not found');
        } else {
            this.listDeputat.splice(findDep, 1)
        }
    }

    delAllGrafter() {
        const notGrafter = this.listDeputat.filter((dep: Deputat) => !dep.grafter);

        this.listDeputat.splice(0, this.listDeputat.length);

        // this.listDeputat.push(notGrafter);
        this.listDeputat = [...notGrafter];
    }

    bigGrafter() {
        const bigGrafter = this.listDeputat.sort((dep1: Deputat, dep2: Deputat) => {
            return dep2.sizeBribe - dep1.sizeBribe
        })
    }

    showAllDep() {
        this.listDeputat.forEach((dep: Deputat) => {
            console.log(dep);
        })
    }

    delAllDep() {
        this.listDeputat.splice(0, this.listDeputat.length)
    }

    sumbribe() {
        this.listDeputat.reduce((previousValue: number, currentValue: Deputat) => {
            return previousValue + currentValue.sizeBribe
        }, 0)
    }


}
