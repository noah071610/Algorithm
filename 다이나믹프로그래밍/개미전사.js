function solution(stores) {
  const dp = Array.from({ length: stores.length }, () => 0);
  dp[0] = stores[0];
  dp[1] = Math.max(stores[0], stores[1]);
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + stores[i]);
  }
  return dp.pop();
}

const stores = [5, 2, 3, 7, 4, 5];

console.log(solution(stores));
