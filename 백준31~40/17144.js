let input = `7 8 30
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0`.split(/\n/g);

let [n, m, time] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let cleaner = [];
const map = Array.from({ length: n }, (_, i) =>
  input
    .shift()
    .split(" ")
    .map((v) => {
      if (v === "-1") {
        cleaner.push([0, i]);
      }
      return +v;
    })
);

function spread(x, y, spead_board) {
  let cnt = 0;
  if (y !== n - 1 && map[y + 1][x] !== -1) {
    cnt++;
    spead_board[y + 1][x] = spead_board[y + 1][x] + parseInt(map[y][x] / 5);
  }
  if (y !== 0 && map[y - 1][x] !== -1) {
    cnt++;
    spead_board[y - 1][x] = spead_board[y - 1][x] + parseInt(map[y][x] / 5);
  }
  if (x !== m - 1 && map[y][x + 1] !== -1) {
    cnt++;
    spead_board[y][x + 1] = spead_board[y][x + 1] + parseInt(map[y][x] / 5);
  }
  if (x !== 0 && map[y][x - 1] !== -1) {
    cnt++;
    spead_board[y][x - 1] = spead_board[y][x - 1] + parseInt(map[y][x] / 5);
  }
  map[y][x] =
    map[y][x] - parseInt(map[y][x] / 5) * cnt
      ? map[y][x] - parseInt(map[y][x] / 5) * cnt
      : map[y][x];
}

while (time > 0) {
  let spead_board = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] > 0) {
        spread(j, i, spead_board);
      }
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      map[i][j] += spead_board[i][j];
    }
  }
  cleaner.forEach((v, k) => {
    let arr = [];
    arr.push(...map[v[1]]);
    if (k === 0) {
      for (let i = v[1] - 1; i >= 0; i--) arr.push(map[i][m - 1]);
      let temp = [...map[0]];
      arr.push(...temp.reverse().slice(1));
      for (let i = 1; i < v[1]; i++) arr.push(map[i][0]);
      arr[0] = 0;
      arr.unshift(arr.pop());
      arr[0] = -1;
      for (let i = 0; i < m; i++) map[v[1]][i] = arr.shift();
      for (let i = v[1] - 1; i >= 0; i--) map[i][m - 1] = arr.shift();
      for (let i = m - 2; i >= 0; i--) map[0][i] = arr.shift();
      for (let i = 1; i < v[1]; i++) map[i][0] = arr.shift();
    } else {
      for (let i = v[1] + 1; i <= n - 1; i++) arr.push(map[i][m - 1]);
      let temp = [...map[n - 1]];
      arr.push(...temp.reverse().slice(1));
      for (let i = n - 2; i > v[1]; i--) arr.push(map[i][0]);
      arr[0] = 0;
      arr.unshift(arr.pop());
      arr[0] = -1;
      for (let i = 0; i < m; i++) map[v[1]][i] = arr.shift();
      for (let i = v[1] + 1; i < n; i++) map[i][m - 1] = arr.shift();
      for (let i = m - 2; i >= 0; i--) map[n - 1][i] = arr.shift();
      for (let i = n - 2; i > v[1]; i--) map[i][0] = arr.shift();
    }
  });

  time--;
}

let sum = 0;

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] > 0) {
      sum += map[i][j];
    }
  }
}

console.log(sum);
