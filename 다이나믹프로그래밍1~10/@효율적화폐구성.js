function solution(n, arr) {
  arr.sort();
  let dp = new Array(n + 1).fill(10001);
  dp[0] = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr[j]; i <= n; i++) {
      if (dp[i - arr[j]] !== 10001) {
        dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1);
      }
    }
  }
  return dp;
}

const n = 42;

console.log(solution(n, [9, 5, 7]));
