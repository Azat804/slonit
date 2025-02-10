function getSumOfNumberFields(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

function getArrayOfNumberFields(obj) {
  let arrayOfNumberFields = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      arrayOfNumberFields.push({ name: key, value: obj[key] });
    }
  }
  arrayOfNumberFields.sort((a, b) => b.value - a.value);
  arrayOfNumberFields = arrayOfNumberFields.map((item) => item.name);
  return arrayOfNumberFields;
}

const user = { name: "Vasya", friends: 5, likes: 19, projects: 7 };
console.log(getSumOfNumberFields(user));
console.log(getArrayOfNumberFields(user));
