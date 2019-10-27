var genButton = document.querySelector("#generate");
console.log(genButton);

//prompt yes or no for each set of characters
var charLength = parseInt(prompt("How long do you want your password to be (choose between 8 and 128 characters)?"), 10);
//prompt to get length of password as well as the characters
var specCharPrompt = confirm("If you would like special characters type 'charSpecial'. If not, select cancel and wait for the next prompt.");


//Need an array of possible characters
var charLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpecial = ['!', '@', '#', '$', '^', '&', '*', '(', ')'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userChoice = [charLetters, charNumbers, charSpecial, charUpper];
var passwordHolder = []

var possibleChoices = [];
var password = "";


possibleChoices = possibleChoices.concat(charLetters);
if (specCharPrompt){
    possibleChoices = possibleChoices.concat(charSpecial);
}

console.log(possibleChoices)

genButton.addEventListener("click", function (event) {
    for (var i = 0; i <= charLength; i++) {
        password += possibleChoices[ Math.floor(Math.random() * possibleChoices.length)];
        //Math.random function to get random numbers and letters etc. If var at top are "true" then run 
        
    }
        //set a variable that will hold the length and type of character
        //if statement based on user input
        //can have an array for each set of special characters
        //generate random characters google examples
        //once you generate the password set it equal to password variable and then shown to user


        //Render password on page
        var pcontainer = document.querySelector("#pcontainer");
        pcontainer.innerHTML = password;

    });
