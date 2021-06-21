const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(line);
}).on("close", () => process.exit());

const main = (line) => {
  let [N, K] = line.split(" ").map(Number);
  let arr = Array.from({ length: N }, (v, i) => i + 1);
  let target = 0;
  let answer = [];
  for (let i = 0; i < N; i++) {
    target += K - 1;
    if (target >= arr.length) {
      target = target % arr.length;
    }
    answer.push(arr.splice(target, 1)[0]);
  }
  console.log("<" + answer.join(", ") + ">");
};
