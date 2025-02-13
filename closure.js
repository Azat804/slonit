function createLogger() {
  let array = [];
  return {
    log(message) {
      array.push(message);
    },
    getLogs() {
      array.forEach((item) => {
        console.log(item);
      });
    },
  };
}

function createRandomGenerator(min, max) {
  return () => Math.floor(min + Math.random() * (max - min + 1));
}

const logger = createLogger();
logger.log("First message");
logger.log("Second message");
logger.log("Third message");
logger.getLogs();

const generator = createRandomGenerator(1, 100);
console.log(generator());
console.log(generator());
console.log(generator());
