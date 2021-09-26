var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[i].filter((v) => v !== ".").join("") !==
      [...new Set(board[i].filter((v) => v !== "."))].join("")
    )
      return false;
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== ".") {
        temp.push(board[j][i]);
      }
    }
    if (temp.join("") !== [...new Set(temp)].join("")) return false;
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      let stack = [];
      for (let y = i; y < i + 3; y++) {
        for (let x = j; x < j + 3; x++) {
          if (board[y][x] !== ".") {
            stack.push(board[y][x]);
          }
        }
      }
      if (stack.join("") !== [...new Set(stack)].join("")) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ])
);
