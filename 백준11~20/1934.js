let input = `11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`.split(/\n/g);

let board = Array.from({ length: 5 }, (_, i) =>
  input
    .shift()
    .split(" ")
    .map((v) => +v)
);

function isBingo() {
  let cnt = 0;
  let diagonal_left = 0;
  let diagonal_right = 0;
  for (let i = 0; i < board.length; i++) {
    diagonal_left += board[i][i];
    diagonal_right += board[i][board.length - 1 - i];
    let naljiBreak = false;
    if (board[i].every((v) => v === 0)) {
      cnt++;
    }
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== 0) {
        naljiBreak = true;
        break;
      }
    }
    if (!naljiBreak) cnt++;
  }
  if (!diagonal_left) cnt++;
  if (!diagonal_right) cnt++;
  console.log(cnt);
  return cnt;
}

let order = input.map((v) => v.split(" ").map((v) => +v)).flat();
console.log(order);
for (let i = 0; i < order.length; i++) {
  for (let j = 0; j < board.length; j++) {
    let target_index = board[j].findIndex((k) => k === order[i]);
    if (target_index !== -1) {
      board[j][target_index] = 0;
      break;
    }
  }
  console.log(board);
  if (isBingo() >= 3) {
    console.log(i + 1);
    break;
  }
}
