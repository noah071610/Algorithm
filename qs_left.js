const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  let arr = input.split(" ").map((v) => parseInt(v));
  console.log((arr[0] + arr[1]) % arr[2]);
  console.log(((arr[0] % arr[2]) + (arr[1] % arr[2])) % arr[2]);
  console.log((arr[0] * arr[1]) % arr[2]);
  console.log(((arr[0] % arr[2]) * (arr[1] % arr[2])) % arr[2]);
};

r1.on("line", (input) => {
  solution(input);
  r1.close();
}).on("close", function () {
  process.exit();
});
