function myFilter(array, callback) {
  const res = [];
  for (let item of array) {
    if (callback(item)) {
      res.push(item);
    }
  }
  return res;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = myFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, (num) => num > 3);

console.log(greaterThanThree);
