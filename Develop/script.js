const generateBtn = document.querySelector('#generate');
let password = "";
let upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
let numerical = ['1234567890'];
let specialCharacters = ['!@#$%^&*'];

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  let length = "";
  do {length = parseInt(prompt("How long would you like your password to be? Please select a number between 8 and 128."));
    if (isNaN(length) ||length < 8 || length > 128) {
      alert('Invalid password length. Please select a number between 8 and 128.');
    }} while (isNaN(length) || length < 8 || length > 128);
   
  let isUpperCase = confirm("Would you like your password to contain UPPERCASE LETTERS?");
  let isLowerCase = confirm("Would you like your password to contain LOWERCASE LETTERS?");
  let isNumerical = confirm("Would you like your password to CONTAIN NUMBERS?");
  let isSpecial = confirm("Would you like your password to contain SPECIAL CHARACTERS?");

    if (!isUpperCase && !isLowerCase && !isNumerical && !isSpecial) {
      alert('You must select at least one character type. Please try again.')
      return;
    }

    if (isUpperCase || isLowerCase || isNumerical || isSpecial) {
      let allowedCharacters = "";
        if (isUpperCase) allowedCharacters += upperCase;
        if (isLowerCase) allowedCharacters += lowerCase;
        if (isNumerical) allowedCharacters += numerical;
        if (isSpecial) allowedCharacters += specialCharacters;

    console.log(allowedCharacters);

    for (let i = 0; i < length; i++) {
      let randomCharacter = Math.floor(Math.random() * allowedCharacters.length);
      password += allowedCharacters.charAt(randomCharacter);
    }
  }
  console.log(password);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

  password = "";
};
