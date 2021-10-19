
//Strumenti da utilizzare
// Function
//prompt
//Math.floorRandom
//ParseInt
//for loop

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userInput = prompt("Scegli Pari o Dispari");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
/**
 * Generates a random number 
 * @param maxValue - insert the possible max number value
 */
function generateRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue + 1);
}

//Sommiamo i due numeri 
pcNumber = generateRandomNumber(5)
let sum = pcNumber + userNumber

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/**
 * Checks if number inserted is odd or even
 * @param  number - number to check
 */
function OddOrEven(number) {
    if (number % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

let result = OddOrEven(sum)
console.log(result, userInput.toLowerCase());

//Dichiariamo chi ha vinto.
if (userInput.toLowerCase() == result) {
    document.getElementById("result").innerHTML =
        `CONGRATULAZIONI HAI VINTO <br> ${userNumber} + ${pcNumber} = ${sum} <br> avevi scelto ${userInput}`;
} else {
    document.getElementById("result").innerHTML =
        `MI DISPIACE HAI PERSO <br> ${userNumber} + ${pcNumber} = ${sum} <br> avevi scelto ${userInput}`
}