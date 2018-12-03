var letters='abcdefghijklmnopqrstuvwxyz';
var computerLetters=letters.split('');
var wins = 0;
var losses = 0;
var correctGuess = false;


var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

// for (i=0; i<10;)

document.onkeyup = function(event) {
    var userGuess = event.key;
computerLetters[Math.floor(Math.random() * computerLetters.length)];
}

userGuess.onkeyup

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

