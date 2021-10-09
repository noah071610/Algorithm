let input = `8 19
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0
0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0
0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0
0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`.split(/\n/g);

const [n, m] = input.shift().split(" ").map(Number);

let board = Array.from({ length: n }, () => input.shift().split(" ").map(Number));

let cnt = 0;
function dfs(x, y) {
  board[y][x] = 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      let queue = [[j, i]];
      board[i][j] = 0;
      while (queue.length) {
        const [x, y] = queue.shift();
        if (y !== n - 1) {
          if (board[y + 1][x] === 1) {
            board[y + 1][x] = 0;
            queue.push([x, y + 1]);
          }
          if (board[y + 1][x - 1] === 1) {
            board[y + 1][x - 1] = 0;
            queue.push([x - 1, y + 1]);
          }
          if (board[y + 1][x + 1] === 1) {
            board[y + 1][x + 1] = 0;
            queue.push([x + 1, y + 1]);
          }
        }
        if (y !== 0) {
          if (board[y - 1][x] === 1) {
            board[y - 1][x] = 0;
            queue.push([x, y - 1]);
          }
          if (board[y - 1][x - 1] === 1) {
            board[y - 1][x - 1] = 0;
            queue.push([x - 1, y - 1]);
          }
          if (board[y - 1][x + 1] === 1) {
            board[y - 1][x + 1] = 0;
            queue.push([x + 1, y - 1]);
          }
        }
        if (x !== m - 1 && board[y][x + 1] === 1) {
          board[y][x + 1] = 0;
          queue.push([x + 1, y]);
        }
        if (x !== 0 && board[y][x - 1] === 1) {
          board[y][x - 1] = 0;
          queue.push([x - 1, y]);
        }
      }
      cnt++;
    }
  }
}
console.log(cnt);
