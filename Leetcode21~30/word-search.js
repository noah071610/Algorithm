var exist = function (board, word) {
  let start = [];
  let answer;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) start.push([i, j]);
    }
  }
  if (start.length === 0) {
    return false;
  }
  let isPossible = false;
  function dfs(x, y, target, board) {
    let temp = target.slice(1);
    if (temp.length === 0) {
      isPossible = true;
      return;
    }
    if (!isPossible) {
      if (x !== board[0].length - 1 && board[y][x + 1] === temp[0]) {
        let swap = board[y][x];
        board[y][x] = 0;
        dfs(x + 1, y, temp, board);
        board[y][x] = swap;
      }
      if (y !== board.length - 1 && board[y + 1][x] === temp[0]) {
        let swap = board[y][x];
        board[y][x] = 0;
        dfs(x, y + 1, temp, board);
        board[y][x] = swap;
      }
      if (x !== 0 && board[y][x - 1] === temp[0]) {
        let swap = board[y][x];
        board[y][x] = 0;
        dfs(x - 1, y, temp, board);
        board[y][x] = swap;
      }
      if (y !== 0 && board[y - 1][x] === temp[0]) {
        let swap = board[y][x];
        board[y][x] = 0;
        dfs(x, y - 1, temp, board);
        board[y][x] = swap;
      }
    }
  }
  for (let i = 0; i < start.length; i++) {
    let [y, x] = start[i];
    let target = word;
    let reset_board = JSON.parse(JSON.stringify(board));
    dfs(x, y, target, reset_board);
    if (isPossible) return isPossible;
  }
  return false;
};

const board = [
  ["A", "B", "E"],
  ["B", "C", "D"],
];
const word = "ABCDEB";
console.log(exist(board, word));
