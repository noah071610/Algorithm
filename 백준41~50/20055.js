let input = `3 6
10 10 10 10 10 10`.split(/\n/g);

let [n, m] = input.shift().split(" ").map(Number);

let conveyor = input
  .shift()
  .split(" ")
  .map((v) => [Number(v), 0]);

let total_rotate = 0;

while (true) {
  total_rotate++;
  conveyor.unshift(conveyor.pop());
  if (conveyor[n - 1][1] === 1) {
    conveyor[n - 1][1] = 0;
  }
  for (let i = n - 2; i >= 0; i--) {
    if (conveyor[i][1] === 1 && conveyor[i + 1][1] !== 1 && conveyor[i + 1][0] > 0) {
      conveyor[i + 1][0] = conveyor[i + 1][0] - 1;
      conveyor[i][1] = 0;
      conveyor[i + 1][1] = 1;
    }
  }
  if (conveyor[n - 1][1] === 1) {
    conveyor[n - 1][1] = 0;
  }
  if (conveyor[0][0] > 0) {
    conveyor[0][0] = conveyor[0][0] - 1;
    conveyor[0][1] = 1;
  }
  if (m <= conveyor.filter((v) => v[0] === 0).length) {
    break;
  }
}

console.log(total_rotate);
