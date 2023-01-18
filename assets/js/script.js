// Assignment Code
let generateBtn = document.querySelector("#generate");
// Symbols
let symbols = [
"!",
"#",
'"',
"$",
"%",
"&",
"'",
"(",
")",
"[",
"]",
"{",
"}",
"*",
"+",
".",
",",
"-",
"/",
":",
";",
"<",
">",
"=",
"?",
"@",
"^",
"_",
"`",
"|",
"~"];
// Uppercase
let uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// Lowercase
let lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Numbers
let numbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

// Function user data
function userData() {

}

// Function generate password
function generatePassword() {

}


// Randomizer function
function randomizer() {
  let userChoice = userData()
  let choice = Math.floor(Math.random() * (userChoice))
  
}


// Write password to the #password input
function writePassword() {
  userData()
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
