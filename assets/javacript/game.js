// VARIABLES
// ==========================================================================

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses_left");
var underscoresShown = document.getElementById("underscores");
var guessedLetters = document.getElementById("letters_guessed");

// Creating object to hold the number of wins and guesses remaining and words, words for the game, 
// letters guessed, wrong letters,random word
// var wordBank = ["Entourage", "Game of Thrones", "The Sopranos", "Mad Men", "Rick and Morty"];

var hangman = {
    wins: 0,
    number_of_guesses_remaining: 9,
    wordBank: ["Entourage", "Game of Thrones", "The Sopranos", "Mad Men", "Rick and Morty"],
    lettersGuessed: [],
    wrongGuess: [],
    underscores: [],

    // MAIN PROCESS
    // ==============================================================================
    //This function is executed start of the game.  
    startGame: function () {
        //chooses a word from the wordBank at random.
        var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
        //Generates underscores same length as word.
        console.log(randomWord);
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] == " ")
                this.underscores.push("  ")

            else
                this.underscores.push(" _ ")

           
        }
        // this.currentLetterGuess(randomWord);



        //Displays underscores
        underscoresShown.textContent = this.underscores.join(" ");
        //Displays guesses remaining
        guessesText.textContent = "Number of Guesses Remaining:" + this.number_of_guesses_remaining;
        //Displays letters guessed
        guessedLetters.textContent = "Letters Already Guessed:" + this.lettersGuessed;
    },
    currentLetterGuess: function (randomWord) {
        var that = this;
        document.onkeyup = function (event) {
            // Captures the key press, converts it to Uppercase, and saves it to a variable.
            var userGuess = event.key.toUpperCase();
            for (i = 0; i < randomWord.length; i++) {
                if (userGuess == randomWord[i]) {
                    //     console.log("if")
                    //     this.underscores.push(userGuess);
                    console.log("letter  found ", userGuess);
                }
                else {
                    that.lettersGuessed.push(userGuess);
                    // console.log("letter not found ", userGuess);
                }


            }
            // this.number_of_guesses_remaining--;

            //    console.log("key pressed "+ userGuess);


        };
    }
};

hangman.startGame();
//   // Captures keyboard input. 
//   document.onkeyup = function(event) {

//     // Captures the key press, converts it to Uppercase, and saves it to a variable.
//     var userGuess = event.key.toUpperCase();
//     this.number_of_guesses_remaining --;

//         //    console.log("key pressed "+ userGuess);


// };

//reset




