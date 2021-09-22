let input = "6";

let num = Number(input);
if (num === 1) return 6;
let dp = [0, 1, 1];
for (let i = 3; i <= num + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp);
console.log(dp[num] * 4 + dp[num - 1] * 2);
