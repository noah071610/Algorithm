let input = `10 10 9
.X...X.S.X
6..5X..X1X
...XXXX..X
X..9X...X.
8.X2X..X3X
...XX.X4..
XX....7X..
X..X..XX..
X...X.XX..
..X.......`.split(/\n/g);

let [n, m, max_target] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const reset_map = Array.from({ length: n }, () => input.shift().split(""));

let queue = [];

for (let i = 0; i < reset_map.length; i++) {
  let find_nezumi = reset_map[i].findIndex((v) => v === "S");
  if (find_nezumi !== -1) {
    queue.push([find_nezumi, i, 0]);
    break;
  }
}

let map = [...reset_map];

let answer = 0;
let target = 1;

while (true) {
  let [x, y, cnt] = queue.shift();
  if (map[y][x] === String(target)) {
    if (target === max_target) return console.log(cnt);
    target++;
    map = [...reset_map];
    queue = [[x, y, cnt]];
    continue;
  }
  if (y !== n - 1 && map[y + 1][x] !== "X") {
    queue.push([x, y + 1, cnt + 1]);
    if (map[y + 1][x] === ".") {
      map[y + 1][x] = "X";
    }
  }
  if (x !== m - 1 && map[y][x + 1] !== "X") {
    queue.push([x + 1, y, cnt + 1]);
    if (map[y][x + 1] === ".") {
      map[y][x + 1] = "X";
    }
  }
  if (x !== 0 && map[y][x - 1] !== "X") {
    queue.push([x - 1, y, cnt + 1]);
    if (map[y][x - 1] === ".") {
      map[y][x - 1] = "X";
    }
  }
  if (y !== 0 && map[y - 1][x] !== "X") {
    queue.push([x, y - 1, cnt + 1]);
    if (map[y - 1][x] === ".") {
      map[y - 1][x] = "X";
    }
  }
}
