let input = `4`;

let n = Number(input);

let dp = [0, 3, 7];

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[n]);
