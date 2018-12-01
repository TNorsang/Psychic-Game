var letters='abcdefghijklmnopqrstuvwxyz';
var computerLetters=letters.split('');
var wins = 0;
var losses = 0;

var whatLetter = document.getElementById("what-letter");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");


document.onkeyup = function(event) {
    var userGuess = event.key;
computerLetters[Math.floor(Math.random() * computerLetters.length)];
}

if ((userGuess === "") || (userGuess === "") || (userGuess === "")) {

    if ((userGuess === "" && computerGuess === "") ||
      (userGuess === "" && computerGuess === "") || 
      (userGuess === "" && computerGuess === "")) {
      wins++;
    } else if (userGuess === computerGuess) {
      ties++;
    } else {
      losses++;
    }

