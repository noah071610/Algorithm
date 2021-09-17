let input = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`.split(/\n/g);

input.pop();
while (input.length > 0) {
  let answer = 0;
  let [x, y] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let board = Array.from({ length: y }, () =>
    input
      .shift()
      .split(" ")
      .map((v) => +v)
  );
  function checker(x, y) {
    board[y][x] = 0;
    if (y !== 0) {
      if (board[y - 1][x] === 1) {
        checker(x, y - 1);
      }
      if (board[y - 1][x + 1] === 1) {
        checker(x + 1, y - 1);
      }
      if (board[y - 1][x - 1] === 1) {
        checker(x - 1, y - 1);
      }
    }
    if (y !== board.length - 1) {
      if (board[y + 1][x] === 1) {
        checker(x, y + 1);
      }
      if (board[y + 1][x + 1] === 1) {
        checker(x + 1, y + 1);
      }
      if (board[y + 1][x - 1] === 1) {
        checker(x - 1, y + 1);
      }
    }
    if (x !== 0 && board[y][x - 1] === 1) {
      checker(x - 1, y);
    }
    if (x !== board[y].length - 1 && board[y][x + 1] === 1) {
      checker(x + 1, y);
    }
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] !== 0) {
        checker(x, y);
        answer++;
      }
    }
  }
  console.log(answer);
}
