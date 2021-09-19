let input = `6 6 11
0 0 0 0 1 1
0 0 0 0 0 0
1 1 1 0 1 0
2 1 0 0 0 0
0 1 0 1 1 1
0 0 0 0 0 0`.split(/\n/g);

let [n, m, time] = input
  .shift()
  .split(" ")
  .map((v) => +v);

if (n - 1 + m - 1 > time) {
  return console.log("Fail");
}

const map = Array.from({ length: n }, () =>
  input
    .shift()
    .split(" ")
    .map((v) => +v)
);

let queue = [[0, 0, 0]];
let answer = 10000000;

map[0][0] = 1;

while (queue.length > 0) {
  let [x, y, cnt] = queue.shift();
  if (x === m - 1 && y === n - 1) {
    if (cnt > time) {
      continue;
    }
    answer = Math.min(answer, cnt);
    break;
  }
  if (map[y][x] === 2) {
    let temp_cnt = cnt + Math.abs(n - 1 - y) + Math.abs(m - 1 - x);
    if (temp_cnt > time) {
      continue;
    }
    answer = Math.min(answer, temp_cnt);
    continue;
  }
  if (y !== n - 1 && map[y + 1][x] !== 1) {
    queue.push([x, y + 1, cnt + 1]);
    if (map[y + 1][x] === 0) {
      map[y + 1][x] = 1;
    }
  }
  if (x !== m - 1 && map[y][x + 1] !== 1) {
    queue.push([x + 1, y, cnt + 1]);
    if (map[y][x + 1] === 0) {
      map[y][x + 1] = 1;
    }
  }
  if (x !== 0 && map[y][x - 1] !== 1) {
    queue.push([x - 1, y, cnt + 1]);
    if (map[y][x - 1] === 0) {
      map[y][x - 1] = 1;
    }
  }
  if (y !== 0 && map[y - 1][x] !== 1) {
    queue.push([x, y - 1, cnt + 1]);
    if (map[y - 1][x] === 0) {
      map[y - 1][x] = 1;
    }
  }
}

console.log(answer === 10000000 ? "Fail" : answer);
