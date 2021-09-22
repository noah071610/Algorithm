let input = `6
1 1 1 1 1 1
2 2 6 2 2 3
2 2 5 2 2 3
2 2 2 4 6 3
0 0 0 0 0 6
0 0 0 0 0 9`.split(/\n/g);

const n = Number(input.shift());

let shark = [];
let shark_size = 2;
let eaten_fish = 0;
let timer = 0;
let map = Array.from({ length: n }, (_, i) =>
  input
    .shift()
    .split(" ")
    .map((v, j) => {
      if (v === "9") {
        shark.push(j, i);
        return -1;
      }
      return +v;
    })
);

while (true) {
  let queue = [[...shark, 0]];
  let fishes = [];
  while (queue.length > 0) {
    let [x, y, cnt] = queue.shift();
    if (map[y][x] < shark_size && map[y][x] > 0) {
      map[y][x] = -1;
      shark = [x, y];
      fishes.push(x, y);
      timer += cnt;
      break;
    } else {
      if (y !== 0 && map[y - 1][x] < shark_size && map[y - 1][x] !== -1) {
        queue.push([x, y - 1, cnt + 1]);
        if (map[y - 1][x] === 0) {
          map[y - 1][x] = -1;
        }
      }
      if (x !== 0 && map[y][x - 1] < shark_size && map[y][x - 1] !== -1) {
        queue.push([x - 1, y, cnt + 1]);
        if (map[y][x - 1] === 0) {
          map[y][x - 1] = -1;
        }
      }
      if (x !== n - 1 && map[y][x + 1] < shark_size && map[y][x + 1] !== -1) {
        queue.push([x + 1, y, cnt + 1]);
        if (map[y][x + 1] === 0) {
          map[y][x + 1] = -1;
        }
      }

      if (y !== n - 1 && map[y + 1][x] <= shark_size && map[y + 1][x] !== -1) {
        queue.push([x, y + 1, cnt + 1]);
        if (map[y + 1][x] === 0) {
          map[y + 1][x] = -1;
        }
      }
    }
  }
  if (fishes.length === 0) {
    console.log(timer);
    break;
  }
  eaten_fish++;
  if (eaten_fish === shark_size) {
    shark_size++;
    eaten_fish = 0;
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[j][i] === -1) {
        map[j][i] = 0;
      }
    }
  }
  console.log(map.map((v) => v.map((k) => (k === 9 ? "-" : k)).join(" ")));
  console.log({ timer, shark_size });
  console.log(``);
}
