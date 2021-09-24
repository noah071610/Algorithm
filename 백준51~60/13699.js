let input = "3";

let n = Number(input);

let dp = [1];

for (let x = 1; x <= n; x++) {
  let temp = 0;
  for (let i = 0, j = x - 1; i < x; i++, j--) {
    temp += dp[i] * dp[j];
  }
  dp.push(temp);
}

console.log(BigInt(dp[n]));
