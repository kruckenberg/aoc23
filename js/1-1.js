import { getInput } from './utils/getInput.js';

function isDigit(char) {
  return /\d/.test(char);
}

function findDigit(str, fromEnd = false) {
  if (fromEnd) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (isDigit(str[i])) return parseInt(str[i], 10);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) return parseInt(str[i], 10);
  }

}
function trebuchet() {
  const list = getInput('1-1.txt');
  const numbers = list.map((ln) => findDigit(ln, false) * 10 + findDigit(ln, true));

  return numbers.reduce((sum, curr) => sum + curr, 0);
}

console.log(trebuchet())
