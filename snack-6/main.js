'use strict';

//variabili di partenza
let numrandom = Math.round(Math.random() * 10);
console.log(numrandom)
let numuser = Number(prompt('Inserisci un numero tra 0 e 10'))

//comando dell'azione: se numuser=numrandom --> hai vinto, altrimenti hai perso
if (numrandom === numuser) {
    console.log('Hai vinto!')
}
else { console.log('Hai perso!') }