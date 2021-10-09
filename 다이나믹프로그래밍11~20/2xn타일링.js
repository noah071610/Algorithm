function solution(n) {
  let dp = Array.from({ length: n + 1 }, () => 0);
  let sort = 1000000007;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] % sort) + (dp[i - 2] % sort);
  }
  return dp[n] % sort;
}

console.log(solution(5));
