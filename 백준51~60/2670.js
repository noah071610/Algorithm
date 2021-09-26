let input = `2`;

let n = Number(input);
let dp = [0];

dp[1] = 0;
dp[2] = 1;

for (let i = 3; i <= n; i++) {
  if (i % 2 === 0) {
    dp[i] = (i / 2) * (i / 2) + dp[i / 2] + dp[i / 2];
  } else {
    dp[i] = Math.floor(i / 2) * Math.ceil(i / 2) + dp[Math.floor(i / 2)] + dp[Math.ceil(i / 2)];
  }
}

console.log(dp[dp.length - 1]);
