'use strict';

// array e variabili di partenza
const numbers = []
let repetitions = 6;

// comando dell'azione: chiedi 6 numeri, se dispari inserisci nell'array
for (let i = 0; i < repetitions; i++) {

    let userinput = Number(prompt('Inserisci un numero'));

    if (userinput % 2 !== 0) {
        numbers.push(userinput);
    }

}

// stampo in console l'array con i nuovi elementi
console.log(numbers);




