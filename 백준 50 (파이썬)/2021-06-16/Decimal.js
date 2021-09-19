const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(parseInt(line));
}).on("close", () => process.exit());

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const main = (line) => {
  console.log(isPrime(line));
};
