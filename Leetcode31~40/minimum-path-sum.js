var minPathSum = function (grid) {
  const [n, m] = [grid.length, grid[0].length];
  let dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  grid[0].reduce((a, b, i) => {
    dp[0][i] = a + b;
    return a + b;
  });
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += grid[i][0];
    dp[i][0] = sum;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[n - 1][m - 1];
};

console.log(
  minPathSum([
    [1, 483284, 1],
    [1, 5, 999],
    [99, 0, 1],
  ])
);
