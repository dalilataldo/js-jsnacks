'use strict';

// //variabili di partenza con maxnumber dato
// let start = 1;
// let maxNumber = 1000;
// let maxValue = maxNumber / 2;

// //comando dell'azione: stampa i numeri pari fino al maxNumber
// for (let i = start; i <= maxValue; i++) {

//     let evenNumbers = i * 2;
//     console.log(evenNumbers);

// }

//variabili di partenza con maxnumber da chiedere all'utente
let start = 1;
let maxNumber = Number(prompt('Inserisci un numero massimo'));
let maxValue = maxNumber / 2;

//comando dell'azione: stampa i numeri pari fino al maxnumber
if (!isNaN(maxNumber)) {
    for (let i = start; i <= maxValue; i++) {

        let evenNumbers = i * 2;
        console.log(evenNumbers);

    }
}
else { console.log('Non hai inserito un numero') }