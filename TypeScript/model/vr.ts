/* клас Верховна рада
поля:
    мапа фракцій
методи:
    додати\видалити фракцію
вивести всі фракції
вивести конкретну фракцію
додати\видалити депутата з фракції
вивести всіх хабарників фракції
вивести найбільшого хабарника у фрації
вивести найбільшого хабарника верховної ради
вивести фсіх депутатів фракції
вивести найбільшого хабарника фракції */

import {Deputat} from "./deputat";
import {Frakcia} from "./frakcia";

export class Vr {
    listFrakcia: Frakcia[] = [];

    constructor(listFrakcia: Frakcia[]) {
        this.listFrakcia = listFrakcia;
    }

    addFr (newFr: Frakcia) {
        this.listFrakcia.push(newFr);
        console.log(`new fr ${newFr} add`)
    }

    delFr (name: Frakcia) {
        const findFr = this.listFrakcia.findIndex((fr: Frakcia) => fr === name);
        if (findFr < 0) {
            console.log('frakcia is not found');
        } else {
            this.listFrakcia.splice(findFr, 1)
        }
    }

    showAllFr () {
        this.listFrakcia.forEach((fr: Frakcia) => {
            console.log(fr);
        })
    }

    showSpecificFr (nameFr: Frakcia) {
        const findSpecFr = this.listFrakcia.find((fr: Frakcia) => fr === nameFr)

        console.log(findSpecFr)
    }

    addDetToFr (fr: Frakcia, dep: Deputat) {
        fr.addDeputat(dep)
    }

    delDepWithFr (nameFr: Frakcia, dep: string) {
        if (nameFr) {
            nameFr.delDeputat(dep)
        }
    }



}