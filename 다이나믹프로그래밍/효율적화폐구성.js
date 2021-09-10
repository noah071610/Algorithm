function solution(n) {
  let dp = new Array(n).fill(0);
  for (let i = 2; i < n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2] + 1;
    }
    if (i % 3 === 0) {
      dp[i] = dp[i / 3] + 1;
    }
  }
  return dp;
}

const n = 15;

console.log(solution(n));
