let input = `8 8 2
1 1 2 2
1 1 4 4`.split(/\n/g);

const [n, m, x] = input.shift().split(" ").map(Number);

let board = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

let arr = [];

function dfs(startX, startY, endX, endY) {
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      if (board[y][x] === 0) board[y][x] = 1;
    }
  }
}

const squares = Array.from({ length: x }, () => input.shift().split(" ").map(Number));

squares.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    while (j === squares[0][0] && i === squares[0][1]) {
      dfs(...squares.shift().flat());
      if (squares.length === 0) break;
    }
    if (squares.length === 0) break;
  }
  if (squares.length === 0) break;
}
let cnt = 0;
function findSquare(x, y) {
  board[y][x] = 1;
  cnt++;
  if (y !== n - 1 && board[y + 1][x] !== 1) {
    findSquare(x, y + 1);
  }
  if (x !== m - 1 && board[y][x + 1] !== 1) {
    findSquare(x + 1, y);
  }
  if (x !== 0 && board[y][x - 1] !== 1) {
    findSquare(x - 1, y);
  }
  if (y !== 0 && board[y - 1][x] !== 1) {
    findSquare(x, y - 1);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) {
      findSquare(j, i);
      arr.push(cnt);
      cnt = 0;
    }
  }
}
console.log(arr.length);
console.log(...arr.sort((a, b) => a - b));
