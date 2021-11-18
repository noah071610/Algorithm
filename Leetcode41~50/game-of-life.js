var gameOfLife = function (board) {
  let answer = Array.from({ length: board.length }, () =>
    Array.from({ length: board[0].length }, () => 0)
  );
  function finder(x, y) {
    let live = 0;
    if (y !== 0) {
      if (board[y - 1][x] === 1) live++;
      if (x === 0) {
        if (board[y - 1][x + 1] === 1) live++;
      } else if (x === board[y].length - 1) {
        if (board[y - 1][x - 1] === 1) live++;
      } else {
        if (board[y - 1][x + 1] === 1) live++;
        if (board[y - 1][x - 1] === 1) live++;
      }
    }
    if (y !== board.length - 1) {
      if (board[y + 1][x] === 1) live++;
      if (x === 0) {
        if (board[y + 1][x + 1] === 1) live++;
      } else if (x === board[y].length - 1) {
        if (board[y + 1][x - 1] === 1) live++;
      } else {
        if (board[y + 1][x + 1] === 1) live++;
        if (board[y + 1][x - 1] === 1) live++;
      }
    }
    if (x !== 0) {
      if (board[y][x - 1] === 1) live++;
    }
    if (x !== board[y].length - 1) {
      if (board[y][x + 1] === 1) live++;
    }
    return live;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let liveCells = finder(j, i);
      let isLive = board[i][j] === 1;
      if (isLive) {
        if (liveCells < 2 || liveCells > 3) {
          answer[i][j] = 0;
        } else {
          answer[i][j] = 1;
        }
      } else {
        if (liveCells === 3) {
          answer[i][j] = 1;
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = answer[i][j];
    }
  }
};

let board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
gameOfLife(board);
console.log(board);
