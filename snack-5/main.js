'use strict';

// array di partenza
const numbers = []

// quante volte chiedere l'input?
let repetitions = 6;

// comando dell'azione: chiedi 6 numeri, se dispari inserisci nell'array
for (let i = 1; i <= repetitions; i++) {

    const userinput = Number(prompt('Inserisci un numero'));

    if (userinput % 2 !== 0) {
        numbers.push(userinput);
    }

}

// stampo in console l'array con i nuovi elementi
console.log(numbers);




