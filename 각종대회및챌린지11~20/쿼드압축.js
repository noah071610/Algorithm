function solution(arr) {
  var answer = [0, 0];
  function dfs(x, y, n) {
    let sum = 0;
    if (n === 1) return answer[arr[y][x]]++;
    for (let i = y; i < y + n; i++) {
      for (let j = x; j < x + n; j++) {
        sum += arr[i][j];
      }
    }
    if (sum === 0) {
      answer[0] += 1;
    } else if (sum === n * n) {
      answer[1] += 1;
    } else {
      dfs(x, y, n / 2);
      dfs(x + n / 2, y, n / 2);
      dfs(x, y + n / 2, n / 2);
      dfs(x + n / 2, y + n / 2, n / 2);
    }
  }
  dfs(0, 0, arr.length);
  return answer;
}

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);
