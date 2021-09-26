let input = "6";

let n = Number(input);
let dp = [0, 1, 2];

for (let i = 3; i <= n; i++) {
  dp[i] = ((dp[i - 1] % 10) + (dp[i - 2] % 10)) % 10;
}

console.log(dp[n]);
