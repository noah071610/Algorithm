let input = `2
4 4
#.#.
.#.#
#.##
.#.#
3 5
###.#
..#..
#.###`.split(/\n/g);

let k = Number(input.shift());

for (let loop = 0; loop < k; loop++) {
  const [n, m] = input.shift().split(" ").map(Number);
  const grassland = Array.from({ length: n }, () => input.shift().split(""));
  let cnt = 0;

  for (let i = 0; i < grassland.length; i++) {
    for (let j = 0; j < grassland[i].length; j++) {
      if (grassland[i][j] === "#") {
        let queue = [[j, i]];
        grassland[i][j] = ".";
        while (queue.length) {
          let [x, y] = queue.shift();
          if (y !== n - 1 && grassland[y + 1][x] === "#") {
            grassland[y + 1][x] = ".";
            queue.push([x, y + 1]);
          }
          if (x !== m - 1 && grassland[y][x + 1] === "#") {
            grassland[y][x + 1] = ".";
            queue.push([x + 1, y]);
          }
          if (x !== 0 && grassland[y][x - 1] === "#") {
            grassland[y][x - 1] = ".";
            queue.push([x - 1, y]);
          }
          if (y !== 0 && grassland[y - 1][x] === "#") {
            grassland[y - 1][x] = ".";
            queue.push([x, y - 1]);
          }
        }
        cnt++;
      }
    }
  }
  console.log(cnt);
}
