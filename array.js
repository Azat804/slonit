function mySlice(arr, start, end) {
  let newArray = [];
  let startIndex = start;
  let endIndex = end;
  let j = 0;
  if (start === undefined || start < -arr.length) {
    startIndex = 0;
  } else if (-arr.length <= start && start < 0) {
    startIndex = start + arr.length;
  }

  if (end === undefined || end >= arr.length) {
    endIndex = arr.length;
  } else if (-arr.length <= end && end < 0) {
    endIndex = end + arr.length;
  } else if (end < -arr.length) {
    endIndex = 0;
  }

  for (let i = startIndex; i < endIndex; i++) {
    newArray[j] = arr[i];
    j++;
  }
  return newArray;
}

function myIndexOf(arr, item, from) {
  let fromIndex = from;
  if (from === undefined || from < -arr.length) {
    fromIndex = 0;
  } else if (-arr.length <= from && from < 0) {
    fromIndex = arr.length + from;
  }

  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

function myIncludes(arr, item, from) {
  let fromIndex = from;
  if (from === undefined || from < -arr.length) {
    fromIndex = 0;
  } else if (-arr.length <= from && from < 0) {
    fromIndex = arr.length + from;
  }

  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 2, 5];
console.log(mySlice(array, 1, 3));
console.log(myIndexOf(array, 2, 2));
console.log(myIncludes(array, 2, 2));
