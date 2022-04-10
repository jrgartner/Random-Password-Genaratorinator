// User input variables:
var enter;
var passwordNumber;
var passwordCharacter;
var passwordUppercase;
var confirmLowercase;
// Start Password variable values:
// Special characters
specialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// Numeric characters
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = lc.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input
  enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  // First if statement for user validation
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    passwordNumber = confirm("Will this contain numbers?");
    passwordCharacter = confirm("Will this contain special characters?");
    passwordUppercase = confirm("Will this contain Uppercase letters?");
    passwordLowercase = confirm("Will this contain Lowercase letters?");
  }

  // Else if for 4 negative options
  if (
    !passwordCharacter &&
    !passwordNumber &&
    !passwordUppercase &&
    !passwordLowercase
  ) {
    choices = alert("You must choose a criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (
    passwordCharacter &&
    passwordNumber &&
    passwordUppercase &&
    passwordLowercase
  ) {
    choices = specialCharacter.concat(num, lc, alpha2);
  }
  // Else if for 3 positive options
  else if (passwordCharacter && passwordNumber && passwordUppercase) {
    choices = specialCharacter.concat(num, alpha2);
  } else if (passwordCharacter && passwordNumber && passwordLowercase) {
    choices = specialCharacter.concat(num, lc);
  } else if (passwordCharacter && passwordLowercase && passwordUppercase) {
    choices = specialCharacter.concat(lc, alpha2);
  } else if (passwordNumber && passwordLowercase && passwordUppercase) {
    choices = num.concat(lc, alpha2);
  }
  // Else if for 2 positive options
  else if (passwordCharacter && passwordNumber) {
    choices = specialCharacter.concat(num);
  } else if (passwordCharacter && passwordLowercase) {
    choices = specialCharacter.concat(lc);
  } else if (passwordCharacter && passwordUppercase) {
    choices = specialCharacter.concat(alpha2);
  } else if (passwordLowercase && passwordNumber) {
    choices = lc.concat(num);
  } else if (passwordLowercase && passwordUppercase) {
    choices = lc.concat(alpha2);
  } else if (passwordNumber && passwordUppercase) {
    choices = num.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (passwordCharacter) {
    choices = specialCharacter;
  } else if (passwordNumber) {
    choices = num;
  } else if (passwordLowercase) {
    choices = lc;
  }
  // Created space variable to fill uppercase conversion
  else if (passwordUppercase) {
    choices = space.concat(alpha2);
  }

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
