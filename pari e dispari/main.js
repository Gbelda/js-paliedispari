//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Strumenti da utilizzare
// Function
//prompt
//Math.floorRandom
//ParseInt
//for loop

let userInput = prompt("Scegli Pari o Dispari").toLowerCase

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"))

/**
 * Generates a random number 
 * @param {string} maxValue - insert the possible max number value
 */
function generateRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue + 1);
}

console.log(generateRandomNumber(5));