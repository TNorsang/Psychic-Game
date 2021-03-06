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

    var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);
    document.getElementById("guesses-so-far").innerHTML = guessedLetters;
    console.log(guessedLetters);

    var reset = function () {
        guessedLetters = [];
        guessesLeft = 11;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }

    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        winSound.play();
        reset();
        alert("You Win!");
    }
    else {
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }
    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        lossSound.play();
        reset();
        alert("You Lost :( Try Again!")
    }

};










