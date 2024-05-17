'use strict';

// variabili di partenza
let start = 1;
let repetitions = 10;

//comando dell'azione: se x = a x precedente, esci dal ciclo
for (i = start; i <= repetitions; i++) {
    let x = Number(prompt('Inserisci un numero random'))
    if (x === 1) break;
}

