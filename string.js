function getCorrectString(inputString) {
  let correctString = "";
  if (inputString) {
    correctString = inputString[0].toUpperCase() + inputString.slice(1);
  }
  return correctString;
}

function getShortenedString(inputString, maxNumberOfCharacters) {
  let arrayOfCharacters = [];
  let lastIndexDelimiter = 0;
  if (inputString.length > maxNumberOfCharacters) {
    inputString = inputString.slice(0, maxNumberOfCharacters - 2);
    arrayOfCharacters = inputString.split("");
    lastIndexDelimiter = arrayOfCharacters.findLastIndex((item) =>
      ".!?,;:-()\"/' ".includes(item)
    );
    lastIndexDelimiter === -1 ? maxNumberOfCharacters - 2 : lastIndexDelimiter;
    inputString = inputString.slice(0, lastIndexDelimiter) + "...";
  }
  return inputString;
}

function isSubstring(string1, string2) {
  return string1.includes(string2) || string2.includes(string1);
}

const input1 = "hello world!";
const input2 = "world";
console.log(getCorrectString(input1));
console.log(getShortenedString(input1, 11));
console.log(isSubstring(input2, input1));
