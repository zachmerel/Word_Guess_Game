// VARIABLES
// ==============================================================================

var wordBank = ["ENTOURAGE", "GAME OF THRONES", "THE SOPRANOS", "MAD MEN", "RICK AND MORTY"];
var wins = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randomWord;
var wintracker;


// Function
// ==============================================================================
//This function is executed start of the game.  
function startGame() {
    //chooses a word from the wordBank at random.
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord)
    //Generates underscores same length as word.
    for (var i = 0; i < randomWord.length; i++) {

        if (randomWord[i] === " ") {
            underScores.push("  ")
        }
        else {
            underScores.push(" _ ")
        }
    }
    //Displays the underscores
    document.getElementById('wordBlanks').innerHTML = underScores.join(" ");
    
    //resets the variables when the round is over
    wrongLetter = [];
    guessesLeft = 9;
}
function winlose(){
    if (wintracker === randomWord.length){
        //display picture of show and title while playing theme music
    }
    else if(guessesLeft === 0){
        //play wahwah sound?
    }
}
// User letter guess
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();

    if (randomWord.indexOf(userGuess) > -1) 
    {
        for( i= 0; i < randomWord.length; i++){
            if(randomWord[i] === userGuess){
                underScores[i] = userGuess; 
                document.getElementById('wordBlanks').innerHTML = userGuess;
                // console.log(underScores)
                wintracker++; 
            }
        }
    }
    else {
        wrongLetter.push(userGuess);
        guessesLeft --;
        document.getElementById('guesses_left').innerHTML =  guessesLeft;
        document.getElementById('letters_guessed').innerHTML =  wrongLetter;
    }
}







// Main
// ==============================================================================
startGame();
