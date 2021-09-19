let input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`.split(/\n/g);

let n = Number(input.shift());

let board1 = Array.from({ length: n }, (_, i) => input[i].split(""));
let board2 = Array.from({ length: n }, (_, i) => input[i].split(""));

for (let i = 0; i < board2.length; i++) {
  for (let j = 0; j < board2.length; j++) {
    if (board2[j][i] === "G") {
      board2[j][i] = "R";
    }
  }
}

function solution(x, y, rgb, target_board) {
  if (target_board[y][x] === rgb) {
    target_board[y][x] = rgb === "R" ? 1 : rgb === "G" ? 2 : 3;
  }
  if (x !== target_board[0].length - 1 && target_board[y][x + 1] === rgb) {
    solution(x + 1, y, rgb, target_board);
  }
  if (y !== n - 1 && target_board[y + 1][x] === rgb) {
    solution(x, y + 1, rgb, target_board);
  }
  if (x !== 0 && target_board[y][x - 1] === rgb) {
    solution(x - 1, y, rgb, target_board);
  }
  if (y !== 0 && target_board[y - 1][x] === rgb) {
    solution(x, y - 1, rgb, target_board);
  }
}

let cnt = 0;
let blind_cnt = 0;

for (let i = 0; i < board1.length; i++) {
  for (let j = 0; j < board1[i].length; j++) {
    if (board1[i][j] === "R" || board1[i][j] === "G" || board1[i][j] === "B") {
      solution(j, i, board1[i][j], board1);
      cnt++;
    }
    if (board2[i][j] === "R" || board2[i][j] === "B") {
      solution(j, i, board2[i][j], board2);
      blind_cnt++;
    }
  }
}

console.log(`${cnt} ${blind_cnt}`);
