// VARIABLES
// ==============================================================================

var wordBank = ["ENTOURAGE", "GAME OF THRONES", "THE SOPRANOS", "MAD MEN", "RICK AND MORTY"];
var wins = 0;
var winTracker = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var randomWord;
var winCount = 0;
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var GOTtheme = document.getElementById("GOT");
var madMenTheme = document.getElementById("MadMen");
var sopranosTheme = document.getElementById("TheSopranos");
var rickAndMortyTheme = document.getElementById("RickandMorty");
var entourageTheme = document.getElementById("Entourage");

// Function
// ==============================================================================
//This function is executed start of the game.  
function startGame() {
    //chooses a word from the wordBank at random.
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Generates underscores same length as word.
    for (var i = 0; i < randomWord.length; i++) {

        if (randomWord[i] === " ") {
            underScores.push('\xa0')
        }
        else {
            underScores.push(" _ ")
        }
    }
    //Displays the underscores
    document.getElementById('wordBlanks').innerHTML = underScores.join(" ");
    document.getElementById('letters_guessed').innerHTML = wrongLetter;
    document.getElementById('guesses_left').innerHTML = guessesLeft;



}

// User letter guess
document.onkeyup = function (event) {
    document.getElementById('directions_text').innerHTML = '';

    // hideDirections();
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert('this is not a valid guess');
    }
    else {
        var userGuess = event.key.toUpperCase();

        //tests to see if user's character guess is in the word
        if (randomWord.indexOf(userGuess) > -1) {
            for (i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userGuess) {
                    underScores[i] = userGuess;

                }
            }
            winLose();
            document.getElementById('wordBlanks').innerHTML = underScores.join(" ");
        }
        //This prevents the user from guessing the same letter mutliple times and alerts them
        else if (wrongLetter.indexOf(userGuess) > -1) {
            alert('you have already guessed this letter');
        }

        else {
            wrongLetter.push(userGuess);
            guessesLeft--;
            winLose();
            document.getElementById('guesses_left').innerHTML = guessesLeft;
            document.getElementById('letters_guessed').innerHTML = wrongLetter;
        }

    }
}
//determining wins and lose
function winLose() {
    var testwin = underScores.includes(' _ ');

    if (testwin === false && randomWord == wordBank[1]) {
        winCount++; 
        document.getElementById('wins_text').innerHTML = "Wins:" + winCount;
        $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/GOTbackground3.jpg)");
        playAudioGOT();
    }
    else if (testwin === false && randomWord == wordBank[3]) {
        winCount++; 
        document.getElementById('wins_text').innerHTML = "Wins:" + winCount;
        $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/madmenbackground.jpg)");
        playAudioMadmen();
    }
    else if (testwin === false && randomWord == wordBank[0]) {
        winCount++; 
        document.getElementById('wins_text').innerHTML = "Wins:" + winCount;
        $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/entouragebackground.jpg)");
        playAudioEntourage();
    }
    else if (testwin === false && randomWord == wordBank[2]) {
        winCount++; 
        document.getElementById('wins_text').innerHTML = "Wins:" + winCount;
        $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/sopranosbackground.jpg)");
        playAudioSopranos();
    }
    else if (testwin === false && randomWord == wordBank[4]) {
        winCount++; 
        document.getElementById('wins_text').innerHTML = "Wins:" + winCount;
        $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/rickbackground.png)");
        playAudioRickandMorty();
    }
    else if (guessesLeft === 0) {
        playLoser();
        //alert user
    }
}

//resets the variables when the round is over
$(".reset").on("click", function () {
    winTracker = 0;
    wrongLetter = [];
    guessesLeft = 9;
    underScores = [];
    randomWord;
    pauseAudioGOT();
    pauseAudioMadMen();
    pauseAudioEntourage();
    pauseAudioSopranos();
    pauseAudioRickandMorty();
    pauseLoser();
    $("#background").css("background-image", "url(/Word_Guess_Game/assets/images/static.jpg)");
    startGame();
})
//fucntions to play or pause music when win and reset
function playAudioGOT() {
    GOTtheme.play();
}
function playAudioMadmen() {
    madMenTheme.play();
}
function playAudioEntourage() {
    entourageTheme.play();
}
function playAudioSopranos() {
    sopranosTheme.play();
}
function playAudioRickandMorty() {
    rickAndMortyTheme.play();
}
function playLoser() {
    Loser.play();
}

function pauseAudioGOT() {
    GOTtheme.pause();
}
function pauseAudioMadMen() {
    madMenTheme.pause();
}
function pauseAudioEntourage() {
    entourageTheme.pause();
}
function pauseAudioSopranos() {
    sopranosTheme.pause();
}
function pauseAudioRickandMorty() {
    rickAndMortyTheme.pause();
}
function pauseLoser() {
    Loser.pause();
}




// Calls Functions
// ==============================================================================
startGame();
winLose();
