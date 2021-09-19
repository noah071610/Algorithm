let input = `4 4
............
.##...###...
.#..........
....#.....#.
....##...##.
....#.....#.
.#.....#....
.##...##....
.#.....#....
..........#.
...###...##.
............`.split(/\n/g);

const [n, m] = input.shift().split(" ").map(Number);

const poster = Array.from({ length: n * 3 }, () => input.shift().split(""));

function backupPoster(x, y) {
  poster[y][x] = "#";
  if (x - 2 >= 0 && poster[y][x - 2] === "#") {
    poster[y][x - 1] = "#";
  }
  if (y - 2 >= 0 && poster[y - 2][x] === "#") {
    poster[y - 1][x] = "#";
  }
  if (x + 2 <= poster[0].length - 1 && poster[y][x + 2] === "#") {
    poster[y][x + 1] = "#";
  }
  if (y + 2 <= poster.length - 1 && poster[y + 2][x] === "#") {
    poster[y + 1][x] = "#";
  }
}

for (let i = 1; i < poster.length - 1; i += 3) {
  for (let j = 1; j < poster[i].length - 1; j += 3) {
    if ((i + j) % 2 === 1) {
      backupPoster(j, i);
    }
  }
}

for (let i = 0; i < poster.length; i++) {
  console.log(poster[i].join(""));
}
