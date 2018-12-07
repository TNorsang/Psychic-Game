// Alphabet letters
var letters = 'abcdefghijklmnopqrstuvwxyz';
// splitting the variables into array
var computerChoices = letters.split('');

// Creating Global Variables for the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var winSound = new Audio("assets/audio/win.mp3");
var lossSound = new Audio("assets/audio/loss.mp3");
// A random guess generator
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var computerGuess = "h";


// Displaying the wins/losses/guessesleft on DOM
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses-left").innerHTML = guessesLeft;


// A function for keys being pressed
document.onkeyup = function (event) {

    var guessedLetters = event.key.toLowerCase();
    document.getElementById("guesses-so-far").innerHTML = guessedLetters;
    console.log(guessedLetters);

    var reset = function () {
        guessesLeft = 11;
        guessedLetters = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }


    if (guessedLetters === computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        winSound.play();
        alert("You Win!");
        reset();
    }
    else {
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }
    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        lossSound.play();
        alert("You Lost :( Try Again!")
        reset();
    }

};










