let input = "11339";

let n = Number(input);
let dp = [0, 1];

for (let i = 2; i <= n; i++) {
  let min = 1e9;
  let j = 1;
  while (j ** 2 <= i) {
    min = Math.min(min, dp[i - j ** 2]);
    j += 1;
  }
  dp[i] = min + 1;
}

console.log(dp[dp.length - 1]);
