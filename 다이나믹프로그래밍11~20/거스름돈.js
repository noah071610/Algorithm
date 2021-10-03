function solution(n, money) {
  let dp = Array.from({ length: n + 1 }, () => 0).fill(1, 0, 1);
  for (let k = 0; k < money.length; k++) {
    for (let i = 0; i <= n; i++) {
      if (i >= money[k]) {
        dp[i] += dp[i - money[k]];
      }
    }
  }
  return dp[n];
}

console.log(solution(5, [1, 2, 5]));
