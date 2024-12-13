const input = document.getElementById("input");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

let upper = "ABCDEFGHIJKMNOPQSTUVXYZ";
let lower = "abcdefghijkmnopqstuvxyz";
let num = "0123456789";
let symbols = "!@#$%^&*()";

function getRandomData(data) {
  return data[Math.floor(Math.random() * data.length)];
}

function PassRandom(password = "") {
  if (uppercaseEl.checked) {
    password += getRandomData(upper);
  }

  if (lowercaseEl.checked) {
    password += getRandomData(lower);
  }

  if (numbersEl.checked) {
    password += getRandomData(num);
  }

  if (symbolsEl.checked) {
    password += getRandomData(symbols);
  }

  if (password.length <= lengthEl.value) {
    return PassRandom(password)
  }

  input.innerHTML = truncatestring(password, lengthEl.value);
}

PassRandom();

generateEl.addEventListener("click", () => {
  PassRandom();
});

function truncatestring(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}

