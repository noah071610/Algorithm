let input = `7 9
OOOPOXXXX
OIOOXXXXX
OOOXPXXXX
OOOXPXXXX
OOOXPXXXX
OOOXPXXXX
OOOXPXXXX`.split(/\n/);

const [n, m] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => input.shift().split(""));
let cnt = 0;
let queue = [];
for (let i = 0; i < n; i++) {
  let doyeon = board[i].findIndex((v) => v === "I");
  if (doyeon !== -1) {
    queue.push([doyeon, i]);
    board[i][doyeon] = "X";
    break;
  }
}

while (queue.length) {
  console.log(board.map((v) => v.join("")));
  const [x, y] = queue.shift();
  if (y !== n - 1 && board[y + 1][x] !== "X") {
    if (board[y + 1][x] === "P") cnt++;
    board[y + 1][x] = "X";
    queue.push([x, y + 1]);
  }
  if (x !== m - 1 && board[y][x + 1] !== "X") {
    if (board[y][x + 1] === "P") cnt++;
    board[y][x + 1] = "X";
    queue.push([x + 1, y]);
  }
  if (x !== 0 && board[y][x - 1] !== "X") {
    if (board[y][x - 1] === "P") cnt++;
    board[y][x - 1] = "X";
    queue.push([x - 1, y]);
  }
  if (y !== 0 && board[y - 1][x] !== "X") {
    if (board[y - 1][x] === "P") cnt++;
    board[y - 1][x] = "X";
    queue.push([x, y - 1]);
  }
}

console.log(cnt === 0 ? "TT" : cnt);
