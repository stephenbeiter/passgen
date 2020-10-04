// Assignment code here
function generatePassword() {
  // optional character arrays
  var charOptions = []

  var pwOptions;

  var pwLength = parseInt(prompt("Choose password length (8-128)"));

  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Not a valid input.  You must enter a number between 8-128");
    generatePassword();
  } else {
    var pwChar = confirm("Do you want to include special characters?");
    var pwNumber = confirm("Do you want to include numbers?");
    var pwLower = confirm("Do you want to include lower case letters?");
    var pwUpper = confirm("Do you want to include upper case letters?");
  };
  if (!pwChar && !pwNumber && !pwLower && !pwUpper) {
    alert("You must confirm a minimum of one criteria");
  } else if (pwChar && pwNumber && pwLower && pwUpper) {
    console.log("All criteria selected");
  }





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
