// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword(){
  let length = prompt("Give a password length between 8 characters and 128 characters");
  if (length < 8) {
    alert("the length should be greater then 8");
  }
  if (length > 128) {
    alert("the length should be less then 128");
  }
console.log("Password length= ", length);

  let includelowercase = confirm("Do you want to include lower case characters in your password? Click Ok for yes and cancel for no");
  console.log("include lowercase= ", includelowercase);
  let passwordCanInclude = "";
  let allLowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  console.log("passwordCanInclude", passwordCanInclude);
  if (includelowercase) {
    passwordCanInclude = passwordCanInclude + allLowercaseCharacters;
  }
  console.log("passwordCanInclude", passwordCanInclude);
  
  let includeuppercase = confirm("Do you want to include upper case characters in your password? Click Ok for yes and cancel for no");
  console.log("include uppercase= ", includeuppercase);
  let includespecialcharacters = confirm("Do you want to include special characters in your password? Click Ok for yes and cancel for no");
  console.log("include special characters= ", includespecialcharacters);
  let includenumeric = confirm("Do you want to include numeric characters in your password? Click Ok for yes and cancel for no");
  console.log("include Numeric= ", includenumeric);
}
// Write password to the #password input
function writePassword() {
  console.log("I am inside right password on")
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
