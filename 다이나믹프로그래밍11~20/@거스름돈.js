function solution(n, money) {
  let dp = Array.from({ length: n + 1 }, () => 0).fill(1, 0, 1);
  for (let j = 0; j < money.length; j++) {
    for (let i = money[j]; i <= n; i++) {
      dp[i] += dp[i - money[j]];
    }
  }
  return dp;
}

console.log(solution(5, [1, 2, 5]));
