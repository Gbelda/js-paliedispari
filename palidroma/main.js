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
 * @param text - word to be checked
 */
function checkPalindrome(text) {
    let insertedWord = text.toLowerCase();
    let reverseWord = insertedWord.split('').reverse().join('');
    return insertedWord == reverseWord
}

//creare regola di controllo e stampa risultato
if (checkPalindrome(userWord)) {
    document.getElementById("result").innerHTML = "The word inserted is a palindrome";
} else {
    document.getElementById("result").innerHTML = 'Not a palindrome';
}