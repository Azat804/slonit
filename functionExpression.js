function calculate(number1, number2, operationFunction) {
  return operationFunction(number1, number2);
}

const plus = function (number1, number2) {
  return number1 + number2;
};

const minus = function (number1, number2) {
  return number1 - number2;
};

const multiply = function (number1, number2) {
  return number1 * number2;
};

const division = function (number1, number2) {
  return number1 / number2;
};

const operations = {
  plus,
  minus,
  multiply,
  division,
};

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));
