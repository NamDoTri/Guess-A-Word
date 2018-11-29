const wordsList = ["VIENNA", "HELSINKI", "COPENHAGEN", "LONDON", "BERLIN", "AMSTERDAM", "OULU", "HANOI", "CANBERRA", "STOCKHOLM"];
var guessedLetters = [];
var keyword = "";
var numberGuesses = 0;

function initializeGame()
{
keyword = wordsList[Math.floor(Math.random()*wordsList.length)];
guessedLetters = [];
numberGuesses = 0;
document.getElementById("congrats").innerHTML = ""
document.getElementById("newGame").style.display = "none";

for (let i = 0; i < keyword.length; i ++)
{
    guessedLetters.push('-');
}
document.getElementById("secretWord").innerHTML = guessedLetters.join(" ");
document.getElementById("numberGuesses").innerHTML = "Guesses: " + numberGuesses;
}
function handleButtons(pressedButton)
{
var selectedLetter = pressedButton.textContent; 

if (guessedLetters.indexOf('-') != -1 && guessedLetters.indexOf(selectedLetter) == -1)
{
    numberGuesses++;
}

for ( var i = 0; i < guessedLetters.length; i++) //check if it's the right letter or not
{
    if ( keyword.charAt(i) == selectedLetter) 
    {
        guessedLetters[i] = selectedLetter;
    }
}

if (guessedLetters.indexOf('-') == -1 )   //display "COngrats"
{
    document.getElementById("congrats").innerHTML = "You got it correct. Congratulations!!!";
    document.getElementById("newGame").style.display = "";
}
document.getElementById("secretWord").innerHTML = guessedLetters.join(" ");
document.getElementById("numberGuesses").innerHTML = "Guesses: " + numberGuesses;
}


