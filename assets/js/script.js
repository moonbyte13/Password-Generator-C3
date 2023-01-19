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
let uppercaseTrue = false
let symbolsTrue = false;
let numbersTrue = false;

// Function user data
function userData() {
  // Password length prompt
  passLength = prompt('What length do you want the password to be?');

  if (isNaN(passLength)) {
    alert('INVALID ENTRY, NOT A NUMBER');
    return;
  };
  if (passLength < 8 || passLength > 128) {
    alert('INVALID, OUT OF PARAMETER');
    return;
  };
  // Criteria prompts
    lowercaseTrue = confirm('Do you want lowercase?');
    uppercaseTrue = confirm('Do you want uppercase?');
    symbolsTrue = confirm('Do you want symbols?');
    numbersTrue = confirm('Do you want numbers?');

  if (lowercaseTrue == false && uppercaseTrue == false && symbolsTrue == false && numbersTrue == false) {
    alert('INVALID, NOT A STRONG ENOUGH PASSWORD');
    return;
  };
  generatePassword();
};

// Password array
let passArray = [];
let ranArray = [];

// Checking arrayPass to confirm it contains the criteria met

// Function generate password
function generatePassword() {

  if (lowercaseTrue === true && passLength > 0) {
    ranArray = ranArray.concat(lowercase);
  }
  if (uppercaseTrue == true && passLength > 0) {
    ranArray = ranArray.concat(uppercase);
  }
  if (symbolsTrue == true && passLength > 0) {
    ranArray = ranArray.concat(symbols);
  }
  if (numbersTrue == true && passLength > 0) {
    ranArray = ranArray.concat(numbers);
  }
  
  while (passLength > 0) {
    randomizer();
    passArray.push(ranArray[random]);
    passLength --;
  }

  if (lowercaseTrue === true) {
    compare(lowercase, passArray);
  }
  if (uppercaseTrue === true) {
    compare(uppercase, passArray);
  }
  if (symbolsTrue === true) {
    compare(symbols, passArray);
  }
  if (numbersTrue === true) {
    compare(numbers, passArray);
  }
}

let noMatch = false;
// Function Check arrays
function compare (arr1, arr2) {
  let i = arr1.length
  while (i >= 0) {
    if (arr1.indexOf(arr2[i]) === -1) {
      console.log(arr1[i] + ' and ' + arr2[i] + ', no match');
      i --;
      noMatch = true;
    } else {
      console.log(arr1[i] + ' and ' + arr2[i] + ', all good');
      i --;
      return true;
    }
  }
  /* if (noMatch === true) {
    console.log('trying again');
      generatePassword();
  } */
}



let random = 0
// Randomizer function
function randomizer() {
  random = [Math.floor(Math.random() * ranArray.length)]
}

// Write password to the #password input
function writePassword() {
  passArray = ['']
  userData();
  let password = passArray.join('');
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);