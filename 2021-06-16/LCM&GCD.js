const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(line);
}).on("close", () => process.exit());

const gcd = (x, y) => {
  let temp;
  while (y !== 0) {
    temp = x % y;
    x = y;
    y = temp;
  }
  return x;
};

const lcm = (x, y) => {
  return parseInt((x * y) / gcd(x, y));
};

const main = (line) => {
  const [N, M] = line.split(" ").map(Number);
  console.log(gcd(N, M));
  console.log(lcm(N, M));
};
