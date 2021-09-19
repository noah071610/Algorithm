let input = `13 12
0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 1 1 0 0 0
0 1 1 1 0 0 0 1 1 0 0 0
0 1 1 1 1 1 1 0 0 0 0 0
0 1 1 1 1 1 0 1 1 0 0 0
0 1 1 1 1 0 0 1 1 0 0 0
0 0 1 1 0 0 0 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0`.split(/\n/g);

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const map = Array.from({ length: n }, () =>
  input
    .shift()
    .split(" ")
    .map((v) => +v)
);

function findAirArea(x, y) {
  map[y][x] = -1;
  if (y !== n - 1 && map[y + 1][x] !== 1 && map[y + 1][x] !== -1) {
    findAirArea(x, y + 1);
  }
  if (x !== m - 1 && map[y][x + 1] !== 1 && map[y][x + 1] !== -1) {
    findAirArea(x + 1, y);
  }
  if (y !== 0 && map[y - 1][x] !== 1 && map[y - 1][x] !== -1) {
    findAirArea(x, y - 1);
  }
  if (x !== 0 && map[y][x - 1] !== 1 && map[y][x - 1] !== -1) {
    findAirArea(x - 1, y);
  }
}
findAirArea(0, 0);

let timer = 0;

while (true) {
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (map[i][j] === 1) {
        if (
          map[i][j + 1] === -1 ||
          map[i][j - 1] === -1 ||
          map[i + 1][j] === -1 ||
          map[i - 1][j] === -1
        ) {
          map[i][j] = 2;
        }
      }
    }
  }
  let isNoCheese = true;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        cnt++;
        map[i][j] = -1;
      }
      if (map[i][j] === 1) {
        isNoCheese = false;
      }
    }
  }
  if (isNoCheese) {
    console.log(timer + 1);
    console.log(cnt);
    break;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === -1) {
        map[i][j] = 0;
      }
    }
  }
  findAirArea(0, 0);
  timer++;
}
