// //variabili di partenza con maxnumber dato
// let start = 1;
// let maxnumber = 1000;
// let maxvalue = maxnumber / 2;

// //comando dell'azione: stampa i numeri pari fino al maxnumber
// for (let i = start; i <= maxvalue; i++) {

//     let evennumbers = i * 2;
//     console.log(evennumbers);

// }

//variabili di partenza con maxnumber da chiedere all'utente
let start = 1;
let maxnumber = Number(prompt('Inserisci un numero massimo'));
let maxvalue = maxnumber / 2;

//comando dell'azione: stampa i numeri pari fino al maxnumber
for (let i = start; i <= maxvalue; i++) {

    let evennumbers = i * 2;
    console.log(evennumbers);

}