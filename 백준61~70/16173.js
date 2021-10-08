let input = `3
0 2 1
2 2 5
1 5 -1`.split(/\n/);

const n = Number(input.shift());

const board = Array.from({ length: n }, () => input.shift().split(" ").map(Number));

let answer = "Hing";

function dfs(x, y) {
  if (board[y][x] === 0) return;
  if (board[y][x] === -1) {
    return (answer = "HaruHaru");
  }
  let cnt = board[y][x];
  if (x + cnt < board[y].length) {
    dfs(x + cnt, y);
  }
  if (y + cnt < board.length) {
    dfs(x, y + cnt);
  }
}

dfs(0, 0);
console.log(answer);
