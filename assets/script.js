// Assignment code here
const generateBtn = document.querySelector("#generate");
// This selects all ids equal to generate in the html file

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // This selects all ids equal to password in the html file
  passwordText.value = password;

}

// This function generates the password
function generatePassword () {
    var passwordLength = prompt("How many characters will be in your password?");
    // This prompt will show on screen before the text is entered
    var inLength = parseINT(passwordLength);
    // parseINT returns an integer
    console.log(inLength);

    // Here we length characters for the text field
    if (inLength < 10 || inLength > 130 || isNaN(inLength)) {
        alert ("Enter a number between 10 and 130.");
        return;
    }


// Variables for password characters
var passwordCharacters = [];
var lowerCase = "abcdefghiklmnopqrstuvwxyz" .split(""); 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var specialCharacters= "!@#$%^&*()-+?<>}{|~;" .split("");
var numbers = "0123456789" .split (""); // we use the .split() method to separate the strings

// lower case letters
var lowerCaseLetters = confirm("Would you like to add any lower case letters?");
if (lowerCaseLetters === true) {
  for (var i = 0; i < lowerCase.length; i++) {
    passwordCharacters.push(lowerCase[i]);
  }
}

// upper case letters
var upperCaseLetters = confirm("Would you like to add any upper case letters?");
if (upperCaseLetters === true) {
  for (var i =0; i < upperCase.length; i++) {
    passwordCharacters.push(upperCase[i]);
  }
}

// special characters
var specialLetterCharacters = confirm("Would you like to add any special characters?");
if (specialLetterCharacters === true) {
  for (var i = 0; i < specialCharacters.length; i++) {
    passwordCharacters.push(specialCharacters[i]);
  }
}

// numbers
var numberCharacters = confirm("Would you like to add any numbers?");
  if(numberCharacters === true) {
    for (var i = 0; i < numbers.length; i++) {
      passwordCharacters.push(numbers[i]);
    }
  }

// I followed the same if statement layout for each of the five variables on lines 30-34 

// the last password the user enters
var lastPassword = "";
for (var i = 0; i < inLength; i++) {
    passwordCharacters[
      Math.floor(Math.random() * passwordCharacters.length)];
    lastPassword +=
      passwordCharacters[
        Math.floor(Math.random() * passwordCharacters.length)];
      }
      return lastPassword;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 