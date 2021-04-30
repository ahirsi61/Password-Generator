// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword(){
  let length = prompt("Give a password length between 8 characters and 128 characters");
  length = +length;
  if (Number.isNaN(length)) {
    alert("Length must be a number between 8 and 128, Please retry by clicking generate password");
    return "";
  }
  if (length < 8) {
    alert("the length should be 8 or greater, Please retry by clicking generate password ");
    return "";
  }
  if (length > 128) {
    alert("the length should be 128 or less, Please retry by clicking generate password");
    return "";
  }
console.log("Password length= ", length);

 // Now lets ask the user if he wants to add lowercase characters in his password
  let includelowercase = confirm("Do you want to include lower case characters in your password? Click Ok for yes and cancel for no");
  console.log("include lowercase= ", includelowercase);
  let passwordCanInclude = "";
  let allLowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  let mypassword = "";
  let lengthOfPasswordAlreadyBuilt = 0;
  console.log("passwordCanInclude", passwordCanInclude);
  if (includelowercase) {
    passwordCanInclude = passwordCanInclude + allLowercaseCharacters;
    mypassword = mypassword + allLowercaseCharacters[Math.floor(Math.random() * allLowercaseCharacters.length)];
    lengthOfPasswordAlreadyBuilt = lengthOfPasswordAlreadyBuilt + 1;
    //  lengthOfPasswordAlreadyBuilt += 1;
  }
  console.log("passwordCanInclude", passwordCanInclude);
  console.log("mypassword", mypassword);

   // Now lets ask the user if he wants to add uppercase characters in his password
  let includeuppercase = confirm("Do you want to include upper case characters in your password? Click Ok for yes and cancel for no");
  console.log("include uppercase= ", includeuppercase);
  let allUppercaseCharacters = "ABCDEFGHIJKLOMNPQRSTUVXWYZ";
  if (includeuppercase) { 
    passwordCanInclude += allUppercaseCharacters;
    //  passwordCanInclude =  passwordCanInclude + allUppercaseCharacters
    mypassword = mypassword + allUppercaseCharacters[Math.floor(Math.random() * allUppercaseCharacters.length)];
    lengthOfPasswordAlreadyBuilt = lengthOfPasswordAlreadyBuilt + 1;
  }
  console.log("passwordCanInclude", passwordCanInclude);
  console.log("mypassword", mypassword);

   // Now lets ask the user if he wants to add special characters in his password
  let includespecialcharacters = confirm("Do you want to include special characters in your password? Click Ok for yes and cancel for no");
  console.log("include special characters= ", includespecialcharacters);
  let allSpecialCharacters = "!@#$%^&*()_-+=~`:;[{}]<,>.?/\|'";
  if (includespecialcharacters) { 
    passwordCanInclude += allSpecialCharacters;
    //  passwordCanInclude =  passwordCanInclude + allSpecialCharacters
    mypassword = mypassword + allSpecialCharacters[Math.floor(Math.random() * allSpecialCharacters.length)];
    lengthOfPasswordAlreadyBuilt = lengthOfPasswordAlreadyBuilt + 1;
  }
  console.log("passwordCanInclude", passwordCanInclude);
  console.log("mypassword", mypassword);

  // Now lets ask the user if he wants to add numbers in his password
  let includenumeric = confirm("Do you want to include numeric characters in your password? Click Ok for yes and cancel for no");
  console.log("include Numeric= ", includenumeric);
  let allNumericCharacters = "0123456789";
  if (includenumeric) { 
    passwordCanInclude += allNumericCharacters;
    //  passwordCanInclude =  passwordCanInclude + allNumericCharacters
    mypassword = mypassword + allNumericCharacters[Math.floor(Math.random() * allNumericCharacters.length)];
    lengthOfPasswordAlreadyBuilt = lengthOfPasswordAlreadyBuilt + 1;
  }
  console.log("passwordCanInclude", passwordCanInclude);
  console.log("mypassword", mypassword);

  if (!(includelowercase || includeuppercase || includespecialcharacters || includenumeric)) {
    alert("At least one character type should be slected, Please retry by pressing generate password again ");
    return mypassword;
  }
  // Use the for loop to generate remaining characters of the password by radomly picking characters out of user specified criteria
  for (let index = 0; index < (length - lengthOfPasswordAlreadyBuilt); index++) {
    mypassword = mypassword + passwordCanInclude[Math.floor(Math.random() * passwordCanInclude.length)];
  }
  console.log("passwordCanInclude", passwordCanInclude);
  console.log("mypassword", mypassword);
  return mypassword;
}
// Write password to the #password input
function writePassword() {
 
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
