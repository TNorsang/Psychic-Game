// Alphabet letters
var letters='abcdefghijklmnopqrstuvwxyz';
// splitting the variables into array
var computerChoices=letters.split('');

// Creating Global Variables for the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {
    
    var guessedLetters = event.key;
    console.log(guessedLetters);
};

if(guessedLetters === computerChoices) {
    wins++;
    alert("You Win!");
}

var guessesLeftScore = function () {

    document.getElementById("guesses-left").innerHTML = (guessesLeft);
    
};

guessesLeftScore();








var reset = function() {
	guessesLeft = 10;
	guessedLetters = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};


