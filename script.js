// Assignment code here
function generatePassword() {
  // optional character arrays
  var charOptions = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upOptions = lowOptions.map(lowOption => lowOption.toUpperCase());
  var pwOptions = [];

  var pwLength = parseInt(prompt("Choose password length (8-128)"));

  if (pwLength && pwLength > 7 && pwLength < 129) {
    var pwChar = confirm("Do you want to include special characters?");
    var pwNumber = confirm("Do you want to include numbers?");
    var pwLower = confirm("Do you want to include lower case letters?");
    var pwUpper = confirm("Do you want to include upper case letters?");
    if (!pwChar && !pwNumber && !pwLower && !pwUpper) {
      alert("You must confirm a minimum of one criteria");
      generatePassword();
    } else if (pwChar && pwNumber && pwLower && pwUpper) {
      pwOptions = charOptions.concat(numOptions, lowOptions, upOptions);
      console.log(pwOptions);
    } else if (pwChar && pwNumber && pwLower && !pwUpper) {
      pwOptions = charOptions.concat(numOptions, lowOptions);
      console.log(pwOptions);
    } else if (pwChar && pwNumber && !pwLower && !pwUpper) {
      pwOptions = charOptions.concat(numOptions);
      console.log(pwOptions);
    } else if (pwChar && !pwNumber && !pwLower && !pwUpper) {
      pwOptions = charOptions;
      console.log(pwOptions);
    } else if (!pwChar && pwNumber && pwLower && pwUpper) {
      pwOptions = pwNumber.concat(pwLower, pwUpper);
      console.log(pwOptions);
    } else if (!pwChar && pwNumber && pwLower && !pwUpper) {
      pwOptions = pwNumber.concat(pwLower);
      console.log(pwOptions);
    } else if (!pwChar && pwNumber && !pwLower && !pwUpper) {
      pwOptions = pwNumber;
      console.log(pwOptions);
    } else if (!pwChar && !pwNumber && pwLower && pwUpper) {
      pwOptions = pwLower.concat(pwUpper);
      console.log(pwOptions);
    } else if (!pwChar && !pwNumber && pwLower && !pwUpper) {
      pwOptions = pwNumber;
      console.log(pwOptions);
    } else if (!pwChar && !pwNumber && !pwLower && pwUpper) {
      pwOptions = pwUpper;
      console.log(pwOptions);
    }
  } else {
    alert("Not a valid input.  You must enter a number between 8-128");
    generatePassword();
  };






}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
