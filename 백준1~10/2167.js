let input = `2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3`.split(/\n/g);

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let arr = Array.from({ length: n }, (_, i) =>
  input
    .shift()
    .split(" ")
    .map((v) => +v)
);

const k = Number(input.shift());

for (let g = 0; g < k; g++) {
  const [i, j, x, y] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let sum = 0;
  for (let a = i - 1; a <= x - 1; a++) {
    for (let b = j - 1; b <= y - 1; b++) {
      sum += arr[a][b];
    }
  }
  console.log(sum);
}
