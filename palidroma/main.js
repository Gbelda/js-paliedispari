//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//Strumenti da utilizzare:
// prompt
//function
//split
//reverse
//join

let userWord = prompt("Type in a word")

/**
 * Check if word is a palindrome
 * @param {string} text - word to be checked
 */
function palindrome(text) {
    let insertedWord = text.toLowerCase();
    let reverseWord = insertedWord.split('').reverse().join('');
    return insertedWord == reverseWord
}

//creare regola di controllo e stampa risultato
if (palindrome(userWord)) {
    console.log("The word inserted is a palindrome");
} else {
    console.log('Not a palindrome');
}