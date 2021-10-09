let input = `3 4 5
3 2
2 2
3 1
2 3
1 1`.split(/\n/g);

const [n, m, x] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

const trash = Array.from({ length: x }, () => input.shift().split(" ").map(Number));

trash.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (trash[0][0] - 1 === i && trash[0][1] - 1 === j) {
      board[i][j] = 1;
      trash.shift();
      if (trash.length === 0) break;
    }
  }
  if (trash.length === 0) break;
}

let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      let queue = [[j, i, 0]];
      let width = 1;
      board[i][j] = 0;
      while (queue.length) {
        let [x, y] = queue.shift();
        if (y !== n - 1 && board[y + 1][x] === 1) {
          board[y + 1][x] = 0;
          width++;
          queue.push([x, y + 1]);
        }
        if (x !== m - 1 && board[y][x + 1] === 1) {
          board[y][x + 1] = 0;
          width++;
          queue.push([x + 1, y]);
        }
        if (x !== 0 && board[y][x - 1] === 1) {
          board[y][x - 1] = 0;
          width++;
          queue.push([x - 1, y]);
        }
        if (y !== 0 && board[y - 1][x] === 1) {
          board[y - 1][x] = 0;
          width++;
          queue.push([x, y - 1]);
        }
      }
      max = Math.max(width, max);
    }
  }
}

console.log(max);
