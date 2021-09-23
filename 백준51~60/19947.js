let input = "25542 10";

let [h, y] = input.split(" ").map(Number);
let dp = [h];

for (let i = 1; i <= y; i++) {
  dp[i] = parseInt(dp[i - 1] * 1.05);
  if (i >= 3) dp[i] = Math.max(dp[i], parseInt(dp[i - 3] * 1.2));
  if (i >= 5) dp[i] = Math.max(dp[i], parseInt(dp[i - 5] * 1.35));
}

console.log(dp[y]);
