let input = `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`.split(/\n/);
let k = Number(input.shift());

for (let i = 0; i < k; i++) {
  let cnt = 0;
  let [m, n, total] = input.shift().split(" ").map(Number);
  let farm = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  for (let i = 0; i < total; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    farm[y][x] = 1;
  }
  function dfs(x, y) {
    farm[y][x] = 0;
    if (y !== n - 1 && farm[y + 1][x] === 1) {
      dfs(x, y + 1);
    }
    if (x !== m - 1 && farm[y][x + 1] === 1) {
      dfs(x + 1, y);
    }
    if (y !== 0 && farm[y][x - 1] === 1) {
      dfs(x - 1, y);
    }
    if (y !== 0 && farm[y - 1][x] === 1) {
      dfs(x, y - 1);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (farm[i][j] === 1) {
        dfs(j, i);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
