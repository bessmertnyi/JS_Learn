import {Deputat, Frakcia, Human, Vr} from "./model";

const Taras = new Deputat(77, 175, 'Taras', 'Bosyi', 29, true, 1000000);
const Igor = new Deputat(67, 173, 'Igor', 'Luchyt', 45, true, 10000);
const Nazar = new Deputat(75, 188, 'Nazar', 'Biychyk', 38, false, 0);
const Diana = new Deputat(53, 180, 'Diana', 'Luchyshyn', 25, false, 0);
const Bogdan = new Deputat(66, 186, 'Bogdan', 'Petryna', 45, true, 99999);

const Ze = new Frakcia([]);
Ze.addDeputat(Bogdan);
Ze.addDeputat(Igor);

const Bandera = new Frakcia([]);
Bandera.addDeputat(Taras);
Bandera.addDeputat(Nazar);
Bandera.addDeputat(Diana);

Ze.showAllDep();
Bandera.showAllDep();

