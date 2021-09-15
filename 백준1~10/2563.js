var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = `3
3 7
15 7
5 2`.split(/\n/g);

let board = [];

for (let i = 0; i < 101; i++) {
  board.push(Array.from({ length: 100 }, () => 0));
}

let cnt = 0;
input.slice(1).forEach((v) => {
  const [x, y] = v.split(" ").map((v) => v * 1);
  for (let i = y + 10 - 1; i >= y; i--) {
    for (let j = x; j < x + 10; j++) {
      if (board[i][j] !== 1) {
        board[i][j] = 1;
        cnt++;
      }
    }
  }
});

console.log(cnt);
