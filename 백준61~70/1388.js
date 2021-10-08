let input = `4 4
----
-|--
-||-
----`.split(/\n/);

const [n, m] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => input.shift().split(""));

let answer = 0;

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === "-") {
      dfsRow(j, i);
      answer++;
    }
    if (board[i][j] === "|") {
      dfsCol(j, i);
      answer++;
    }
  }
}

function dfsRow(x, y) {
  board[y][x] = 0;
  if (x === m - 1) return;
  if (board[y][x + 1] === "-") {
    dfsRow(x + 1, y);
  }
}

function dfsCol(x, y) {
  board[y][x] = 0;
  if (y === n - 1) return;
  if (board[y + 1][x] === "|") {
    dfsCol(x, y + 1);
  }
}

console.log(answer);
