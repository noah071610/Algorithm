let input = `6 6
...#..
.##v#.
#v.#.#
#.o#.#
.###.#
...###`.split(/\n/);

const [n, m] = input.shift().split(" ").map(Number);

const board = Array.from({ length: n }, () => input.shift().split(""));
let answer = [0, 0];
let sheep = 0;
let wolf = 0;
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    if (board[i][j] === "v" || board[i][j] === "o") {
      dfs(j, i);
      if (sheep > wolf) {
        answer[0] += sheep;
      } else {
        answer[1] += wolf;
      }
      sheep = 0;
      wolf = 0;
    }
  }
}

function dfs(x, y) {
  if (board[y][x] === "o") {
    sheep++;
  }
  if (board[y][x] === "v") {
    wolf++;
  }
  board[y][x] = "#";
  if (y !== n - 1 && board[y + 1][x] !== "#") {
    dfs(x, y + 1);
  }
  if (x !== m - 1 && board[y][x + 1] !== "#") {
    dfs(x + 1, y);
  }
  if (y !== 0 && board[y][x - 1] !== "#") {
    dfs(x - 1, y);
  }
  if (y !== 0 && board[y - 1][x] !== "#") {
    dfs(x, y - 1);
  }
}

console.log(...answer);
