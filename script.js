// Addition of Variables

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numChar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateBtn = document.querySelector("#generate");


const passwordValue = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const number = 5

// Event listener
generateBtn.addEventListener("click", passwordValue);

const generatePassword = () => {
  const valueRange = prompt("Select a value between 8-128 as the length of password")

  const includesLowCase = confirm("Do you want to have lower case letters?");
  const includesUpCase = confirm("Do you want to have upper case letters?");
  const includesNum = confirm("Do you want to have numbers in your password?");
  const includeSpChar = confirm("Do you want to have special characters?");


  let chosenCharacters = [];
  // determine input values
  if (includeSpChar) {
    chosenCharacters = chosenCharacters.concat(specialCharacters)
  }
  if (includesNum) {
    chosenCharacters = chosenCharacters.concat(numChar)
  }
  if (includesUpCase) {
    chosenCharacters = chosenCharacters.concat(upperCase)
  }
  if (includesLowCase) {
    chosenCharacters = chosenCharacters.concat(lowerCase)
  }

  let PasswordVariable = ""

  for (let i = 0; i < parseInt(valueRange); ++i) {
    PasswordVariable += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
  }

  return PasswordVariable
}
