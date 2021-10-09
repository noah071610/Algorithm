let input = `8 8
11000111
01100000
00011001
11001000
10001001
10111100
01010000
00001011`.split(/\n/);

const [n, m] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => input.shift().split(""));

for (let i = 0; i < board[0].length; i++) {
  if (board[0][i] === "0") {
    board[0][i] = "2";
    if (dfs(i, 0)) return console.log("YES");
  }
}

function dfs(x, y) {
  if (y === n - 1) {
    return true;
  }
  if (y !== n - 1 && board[y + 1][x] === "0") {
    board[y + 1][x] = "2";
    if (dfs(x, y + 1)) return true;
  }
  if (x !== m - 1 && board[y][x + 1] === "0") {
    board[y][x + 1] = "2";
    if (dfs(x + 1, y)) return true;
  }
  if (x !== 0 && board[y][x - 1] === "0") {
    board[y][x - 1] = "2";
    if (dfs(x - 1, y)) return true;
  }
  if (y !== 0 && board[y - 1][x] === "0") {
    board[y - 1][x] = "2";
    if (dfs(x, y - 1)) return true;
  }
}

console.log("NO");
