// VARIABLES
// ==========================================================================
// Creating object to hold the number of wins and guesses remaining and words, words for the game, 
// letters guessed, wrong letters,random word
var hangman = {
    wins: 0,
    number_of_guesses_remaining: 9,
    wordBank: ["Entourage", "Game of Thrones", "The Sopranos", "Mad Men", "Rick and Morty"],
    lettersGuessed: [],
    wrongGuess: [],
    underscores: [],
    randomWord: "",


    // Create variables that hold references to the places in the HTML where we want to display things.
    winsText: document.getElementById("wins-text"),
    guessesText: document.getElementById("number_of_guesses"),
    userCharGuess: document.getElementById("userchoice-text"),

    //Creates array of characters in alphabet
    // String alphabetCharacters = "abcdefghijklmnopqrstuvwxyz";
    // char[] ; alphabetArray = alphabetCharacters.toCharArray();

    
    // MAIN PROCESS
    // ==============================================================================
    //This function is executed start of the game.  
    startGame: function () {
        //chooses a word from the wordBank at random.
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        //Generates underscores same length as word.
        for (i = 0; i < randomWord.length, i++;) {
            underscores.push(" _ ")
        }

    },
};
  // Captures keyboard input. 
  document.onkeyup = function(event) {

    // Captures the key press, converts it to Uppercase, and saves it to a variable.
    var userGuess = event.key.toUpperCase();
           
           console.log("key pressed "+ userGuess);
    

};


