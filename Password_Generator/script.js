const input_box = document.querySelector("#input_password");
const lenght = 12;
const copy = document.querySelector("#copy");

let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
let NUMBERS = "0123456789";
let SYMBOLS = "!@#$%^&*()_-+=<>?/{}[]|~";

const allChar = UPPERCASE + LOWERCASE + NUMBERS + SYMBOLS;

const genPassword = () => {
  let password = "";
  password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
  password += LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)];
  password += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  password += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  while (lenght > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  input_box.value = password;
};

copy.addEventListener("click", () => {
  input_box.select();
  document.execCommand("copy");
});

