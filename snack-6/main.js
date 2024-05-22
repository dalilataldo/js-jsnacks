'use strict';

//variabili di partenza
let numRandom = Math.round(Math.random() * 10);
console.log(numRandom)
let numUser = Number(prompt('Inserisci un numero tra 0 e 10'))

//comando dell'azione: se numuser=numrandom --> hai vinto, altrimenti hai perso
if (!isNaN(numUser)) {
    if (numRandom === numUser) {
        console.log('Hai vinto!')
    }
    else { console.log('Hai perso!') }
}
else { console.log('Non hai inserito un numero') }