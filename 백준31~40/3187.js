let input = `9 12
.###.#####..
#.kk#...#v#.
#..k#.#.#.#.
#..##k#...#.
#.#v#k###.#.
#..#v#....#.
#...v#v####.
.####.#vv.k#
.......####.`.split(/\n/g);

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const map = Array.from({ length: n }, () => input.shift().split(""));

let vk = { k: 0, v: 0 };
function findArea(x, y) {
  if (map[x][y] === "v") {
    vk.v = vk.v + 1;
  } else if (map[x][y] === "k") {
    vk.k = vk.k + 1;
  } else if (map[x][y] === "#") {
    return;
  }
  map[x][y] = "#";
  if (x !== 0) {
    findArea(x - 1, y);
  }
  if (y !== 0) {
    findArea(x, y - 1);
  }
  if (x !== n - 1) {
    findArea(x + 1, y);
  }
  if (x !== m - 1) {
    findArea(x, y + 1);
  }
}

let answer = { k: 0, v: 0 };

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === "v" || map[i][j] === "k") {
      findArea(i, j);
      if (vk.v >= vk.k) {
        answer.v = answer.v + vk.v;
      } else {
        answer.k = answer.k + vk.k;
      }
      vk = { k: 0, v: 0 };
    }
  }
}
console.log(`${answer.k} ${answer.v}`);
