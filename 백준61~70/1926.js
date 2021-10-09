let input = `4 4
1 1 1 1
1 1 0 0
0 0 0 0
0 0 0 0`.split(/\n/g);

const [n, m] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => input.shift().split(" ").map(Number));

let max = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      let queue = [[j, i, 0]];
      let paintWidth = 1;
      board[i][j] = 0;
      while (queue.length) {
        let [x, y] = queue.shift();
        if (y !== n - 1 && board[y + 1][x] === 1) {
          board[y + 1][x] = 0;
          paintWidth++;
          queue.push([x, y + 1]);
        }
        if (x !== m - 1 && board[y][x + 1] === 1) {
          board[y][x + 1] = 0;
          paintWidth++;
          queue.push([x + 1, y]);
        }
        if (x !== 0 && board[y][x - 1] === 1) {
          board[y][x - 1] = 0;
          paintWidth++;
          queue.push([x - 1, y]);
        }
        if (y !== 0 && board[y - 1][x] === 1) {
          board[y - 1][x] = 0;
          paintWidth++;
          queue.push([x, y - 1]);
        }
      }
      max = Math.max(paintWidth, max);
      cnt++;
    }
  }
}
console.log(cnt);
console.log(max);
