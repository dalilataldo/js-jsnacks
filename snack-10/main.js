'use strict';

// variabili di partenza
let firstNum = null;
let start = 0;
let repetitions = 10;

//comando dell'azione: se firstnum = secondnum, esci dal ciclo
for (let i = start; i < 1; i++) {
    let secondNum = Number(prompt('Inserisci un numero'));

    if (firstNum === secondNum) {
        console.log('Hai perso')
        break;
    } else {
        firstNum = secondNum
        i--;
    }
}


