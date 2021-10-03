function solution(n) {
  let dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp.pop();
}

const n = 10;

console.log(solution(n));
