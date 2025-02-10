const getRandomInRange = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const guessNumber = (min, max) => {
  const secretNumber = getRandomInRange(min, max);
  console.log(`Компьютер 1 загадал число: ${secretNumber}.\n`);
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    console.log(`Компьютер 2: Попробую число ${middle}.`);
    if (middle === secretNumber) {
      console.log("Компьютер 1: Угадал!\n");
      break;
    } else if (middle < secretNumber) {
      min = middle;
      console.log("Компьютер 1: Больше.\n");
    } else {
      max = middle;
      console.log("Компьютер 1: Меньше.\n");
    }
  }
};

guessNumber(1, 100);
