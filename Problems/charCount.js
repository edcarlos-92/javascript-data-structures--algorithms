function countStringChar(str) {
  let result = {};
  for (i = 0; i < str.length; i++) {
    let character = str[i].toLowerCase();
    if (/[0-9a-z]/.test(character)) {
      if (result[character] > 0) {
        result[character]++;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
}
let data = 'Carslos';
console.log(countStringChar(`countStringChar`, data));

//Alt Solution
/*
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code < 91) && //uperCase Alphabets (A-Z)
    !(code > 96 && code < 123)  //lowerCase Alphabets (a-z)
  ) {
    
    return false;
  }
  return true;
}

function characterCounter(string) {
  let obj = {};
  for (let character of string) {
    character = character.toLowerCase();
    if (isAlphaNumeric(character)) {
      obj[character] = ++obj[character] || 1;
    }
  }
  return obj;
}

let input = 'casrlos';
console.log(characterCounter(`characterCounter`, input));
*/
