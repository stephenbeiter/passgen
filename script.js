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
    }
    // All options
    else if (pwChar && pwNumber && pwLower && pwUpper) {
      pwOptions = charOptions.concat(numOptions, lowOptions, upOptions);
    }
    // Three options
    else if (pwChar && pwNumber && pwLower && !pwUpper) {
      pwOptions = charOptions.concat(numOptions, lowOptions);
    } else if (pwChar && pwNumber && !pwLower && pwUpper) {
      pwOptions = charOptions.concat(numOptions, upOptions);
    } else if (pwChar && !pwNumber && pwLower && pwUpper) {
      pwOptions = charOptions.concat(lowOptions, upOptions);
    } else if (!pwChar && !pwNumber && pwLower && pwUpper) {
      pwOptions = numOptions.concat(lowOptions, upOptions);
    }
    //  Two options
    else if (pwChar && pwNumber && !pwLower && !pwUpper) {
      pwOptions = charOptions.concat(numOptions);
    } else if (pwChar && !pwNumber && pwLower && !pwUpper) {
      pwOptions = charOptions.concat(lowOptions);
    } else if (!pwChar && pwNumber && pwLower && !pwUpper) {
      pwOptions = numOptions.concat(lowOptions);
    } else if (pwChar && !pwNumber && !pwLower && pwUpper) {
      pwOptions = charOptions.concat(upOptions);
    } else if (!pwChar && pwNumber && !pwLower && pwUpper) {
      pwOptions = numOptions.concat(upOptions);
    } else if (!pwChar && !pwNumber && pwLower && pwUpper) {
      pwOptions = lowOptions.concat(upOptions);
    }
    // One option
    else if (!pwChar && !pwNumber && !pwLower && pwUpper) {
      pwOptions = upOptions;
    } else if (!pwChar && !pwNumber && pwLower && !pwUpper) {
      pwOptions = lowOptions;
    } else if (!pwChar && pwNumber && !pwLower && !pwUpper) {
      pwOptions = numOptions;
    } else if (pwChar && !pwNumber && !pwLower && !pwUpper) {
      pwOptions = charOptions;
    };

    var pwArray = [];

    for (i = 0; i < pwLength; i++) {
      var pwValues = pwOptions[Math.floor(Math.random() * pwOptions.length)];
      pwArray.push(pwValues);
    }

    password = pwArray.join("");
    return password;

  } else {
    alert("Not a valid input.  You must enter a number between 8-128");
    generatePassword();
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
