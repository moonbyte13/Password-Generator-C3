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

// User variables
let passLength = 0;
let lowercaseTrue = false;
let uppercaseTrue = false;
let symbolsTrue = false;
let numbersTrue = false;

// Function user data
function userData() {
  // Password length prompt
  passLength = prompt('What length do you want the password to be?');

  if (NaN[passLength]) {
    alert('INVALID ENTRY, NOT A NUMBER');
    return;
  };
  if (passLength < 8 || passLength > 128) {
    alert('INVALID, OUT OF PARAMETER');
    return; 
  };
  // Criteria prompts
  const criteria = [
    lowercaseTrue = confirm('Do you want lowercase?'),
    uppercaseTrue = confirm('Do you want uppercase?'),
    symbolsTrue = confirm('Do you want symbols?'),
    numbersTrue = confirm('Do you want numbers?')
  ];
  

  if (lowercaseTrue == false && uppercaseTrue == false && symbolsTrue == false && numbersTrue == false) {
    alert('INVALID, NOT A STRONG ENOUGH PASSWORD');
    return; 
  };
}
// Password array
const passArray = [''];

// Function generate password
function generatePassword() {
  while (passLength == !0) {
    if (criteria.lowercaseTrue == true && passLength >= 0) {
      passArray.push(lowercaseRan);
    }
    if (criteria.uppercaseTrue == true && passLength >= 0) {
      passArray.push(uppercaseRan);
    }
    if (criteria.symbolsTrue == true && passLength >= 0) {
      passArray.push(symbolRan);
    }
    if (criteria.numbersTrue == true && passLength >= 0) {
      passArray.push(numberRan);
    }
  }
}

// Randomizer variables
let lowercaseRan = 0;
let uppercaseRan = 0;
let symbolRan = 0;
let numberRan = 0;
let criteriaRan = 0;

// Randomizer function
function randomizer() {
  lowercaseRan = Math.floor(Math.random() * (lowercase.length));
  uppercaseRan = Math.floor(Math.random() * (uppercase.length));
  symbolRan = Math.floor(Math.random() * (symbols.length));
  numberRan = Math.floor(Math.random() * (numbers.length));
  criteriaRan = Math.floor()
}


// Write password to the #password input
function writePassword() {
  userData();
  randomizer();
 /*  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password; */
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
