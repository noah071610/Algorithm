let input = "10";

let num = Number(input);
let dp = [
  [0, 0],
  [1, 0],
  [0, 1],
];
for (let i = 3; i <= num + 1; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}
console.log(...dp[num + 1]);
