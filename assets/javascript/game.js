var letters='abcdefghijklmnopqrstuvwxyz';
var computerLetters=letters.split('');
var winScore = 0;
var lossScore = 0;
var correctGuess = false;

 
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");


// for (var i = 0; i < 10; i = i + 1) {

// }


document.onkeyup = function(event) {
    var userGuess = event.key; 
    var computerGuess = Math.floor(Math.random() * (computerLetters.length - 1));
    var randomLetter = computerLetters[computerGuess];
    console.log (userGuess);
}


// if ((userGuess === "") || (userGuess === "") || (userGuess === "")) {

//     if ((userGuess === "" && computerGuess === "") ||
//       (userGuess === "" && computerGuess === "") || 
//       (userGuess === "" && computerGuess === "")) {
//       wins++;
//     } else if (userGuess === computerGuess) {
//       ties++;
//     } else {
//       losses++;
//     }

