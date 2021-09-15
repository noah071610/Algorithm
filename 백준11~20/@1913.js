let input = `11
111`.split(/\n/g);

let N = Number(input.shift());
let target_index = Number(input[0]);

let board = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

let num = 1;
let k = 1;
let answer = [];
let x = Math.floor(N / 2);
let y = Math.floor(N / 2);
board[y][x] = num++;
if (target_index === 1) {
  answer.push(x, y);
}
while (true) {
  for (let i = y - 1; i > y - k - 1; i--) {
    num === target_index && answer.push(i, x);
    board[i][x] = num++;
  }
  y -= k;
  for (let i = x + 1; i < x + k + 1; i++) {
    num === target_index && answer.push(y, i);
    board[y][i] = num++;
  }
  x += k;
  k += 1;
  for (let i = y + 1; i < y + k + 1; i++) {
    num === target_index && answer.push(i, x);
    board[i][x] = num++;
  }
  y += k;
  for (let i = x - 1; i > x - k - 1; i--) {
    num === target_index && answer.push(y, i);
    board[y][i] = num++;
  }
  x -= k;
  k += 1;
  if (k === N) {
    for (let i = N - 2; i >= 0; i--) {
      num === target_index && answer.push(i, 0);
      board[i][0] = num++;
    }
    break;
  }
}
board.forEach((v) => console.log(...v));
console.log(...answer.map((k) => k + 1));
