// Alphabet letters
var letters='abcdefghijklmnopqrstuvwxyz';
// splitting the variables into array
var computerChoices=letters.split('');

// Creating Global Variables for the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

// A random guess generator
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var computerGuess = "h";


// Displaying the wins/losses/guessesleft on DOM
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses-left").innerHTML = guessesLeft;


// A function for keys being pressed
document.onkeyup = function (event) {

    var guessedLetters = event.key;
    console.log(guessedLetters);
    document.getElementById("guesses-so-far").innerHTML = guessedLetters;

    var reset = function() {
        guessesLeft = 10;
        guessedLetters = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log (computerGuess);
    };
    

    if(guessedLetters === computerGuess) {
        wins ++;
        alert("You Win!");
    }
    if (guessedLetters != computerGuess) {
        losses --;

    }
    
};










