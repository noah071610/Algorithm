const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let wrong = true;
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

rl.on("line", (line) => {
  if (line === "0") {
    rl.close();
  }
  input.push(line);
}).on("close", () => {
  input = input.map(Number);
  input.forEach((v) => {
    for (let i = 2; i < v; i++) {
      if (isPrime(i) && isPrime(v - i)) {
        console.log(`${v} = ${i} + ${v - i}`);
        wrong = false;
        break;
      }
    }
  });
  if (wrong) {
    console.log("Goldbach's conjecture is wrong.");
  }
});
