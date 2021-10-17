var uniquePathsWithObstacles = function (obstacleGrid) {
  let [n, m] = [obstacleGrid.length, obstacleGrid[0].length];
  if (n === 1 && m === 1) {
    obstacleGrid[0][0] === 1 ? 0 : 1;
  }
  let dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[0][i] === 1) break;
    dp[0][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[i][0] === 1) break;
    dp[i][0] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[n - 1][m - 1];
};

console.log(uniquePathsWithObstacles([[0, 1, 0]]));
