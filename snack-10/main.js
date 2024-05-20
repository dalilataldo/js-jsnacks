'use strict';

// variabili di partenza
let firstnum = null;
let start = 0;
let repetitions = 10;

//comando dell'azione: se firstnum = secondnum, esci dal ciclo
for (let i = start; i < repetitions; i++) {
    let firstnum = Number(prompt('Inserisci un numero random'));
    let secondnum = Number(prompt('Inserisci un numero random'));
    if (firstnum === secondnum) {
        console.log('Hai perso')
        break;
    } else if (firstnum !== secondnum) { firstnum = secondnum }
    console.log(firstnum)
}


