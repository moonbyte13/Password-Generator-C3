// Assignment Code
let generateBtn = document.querySelector("#generate");
// Symbols
let symbols = [
"!",
"#",
"$",
"%",
"&",
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
"~"
];
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

let passLength = 0;
let lowercaseTrue = false;
let uppercaseTrue = false;
let symbolsTrue = false;
let numbersTrue = false;

// Function user data
function userData() {
  ranArray = [];
  // Password length prompt
  passLength = prompt('What length do you want the password to be? 8-128');

  if (isNaN(passLength)) {
    alert('INVALID ENTRY, NOT A NUMBER');
    return null;
  }
  if (passLength < 8 || passLength > 128) {
    alert('INVALID, OUT OF PARAMETER');
    return null;
  }
  // Criteria prompts
  lowercaseTrue = confirm('Do you want lowercase?');
  uppercaseTrue = confirm('Do you want uppercase?');
  symbolsTrue = confirm('Do you want symbols?');
  numbersTrue = confirm('Do you want numbers?');

  if (
    lowercaseTrue == false &&
    uppercaseTrue == false &&
    symbolsTrue == false &&
    numbersTrue == false
  ) {
    alert('INVALID, NOT A STRONG ENOUGH PASSWORD');
    return null;
  }
  // Object criteria
  let passOptions = {
    passLength : passLength,
    lowercaseTrue : lowercaseTrue,
    uppercaseTrue : uppercaseTrue,
    symbolsTrue : symbolsTrue,
    numbersTrue : numbersTrue,
  };
  return passOptions;
}

// Password array
let passArray = [];
let ranArray = [];

// Function generate password
function generatePassword() {
  let criteria = userData();
  if (criteria.lowercaseTrue === true && passLength > 0) {
    ranArray = ranArray.concat(lowercase);
  }
  if (criteria.uppercaseTrue == true && passLength > 0) {
    ranArray = ranArray.concat(uppercase);
  }
  if (criteria.symbolsTrue == true && passLength > 0) {
    ranArray = ranArray.concat(symbols);
  }
  if (criteria.numbersTrue == true && passLength > 0) {
    ranArray = ranArray.concat(numbers);
  }
  while (passLength > 0) {
    randomizer();
    passArray.push(ranArray[random]);
    passLength --;
  }
  console.log(passArray);
  if (criteria.lowercaseTrue == true) {
    if (compare(passArray, lowercase) == false){
      console.log('false, no lowercase match')
      return null;
    }
  }
  if (criteria.uppercaseTrue == true) {
    if (compare(passArray, uppercase) == false){
      console.log('false, no uppercase match')
      return null;
    }
  }
  if (criteria.symbolsTrue == true) {
    if (compare(passArray, symbols) == false){
      console.log('false, no symbols match')
      return null;
    }
  }
  if (criteria.numbersTrue == true) {
    if (compare(passArray, numbers) == false){
      console.log('false, no numbers match')
      return null;
    }
  }
  return passArray.join('');
}

// Function Check arrays
function compare (arr1, arr2) {
  let i = 0;
  let match = 0;
  while (i < arr1.length) {
    /* console.log(arr1);
    console.log(arr2); */
    match = arr2.indexOf(arr1[i]);
    if (match !== -1) {
      console.log('Match! There is a ' + '"' + arr1[i] + '"' + ' at position ' + (match + 1)+ ' of ' + arr2);
      return true;
    }
    i ++;
  }
  return false;
}

let random = 0
// Randomizer function
function randomizer() {
  random = [Math.floor(Math.random() * ranArray.length)]
}

// Write password to the #password input
function writePassword() {
  passArray = [];
  let password = generatePassword();
  console.log(password)
  if (password !== null) {
    let passwordText = document.querySelector("#password");
  passwordText.value = password;
  }else {
    alert('error, not all criteria could not be met, please try again');
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);