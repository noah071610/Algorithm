let input = `5 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1`.split(/\n/g);

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let house = [];
let chicken = [];
let map = Array.from({ length: n }, (_, i) =>
  input
    .shift()
    .split(" ")
    .map((v, j) => {
      if (v === "1") {
        house.push({ x: j, y: i });
      }
      if (v === "2") {
        chicken.push({ x: j, y: i });
      }
      return +v;
    })
);

function combination(arr, selectedNum) {
  let result = [];
  if (selectedNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, i, origin) => {
    const rest = origin.slice(i + 1);
    const comb = combination(rest, selectedNum - 1);
    const attached = comb.map((t) => [v, ...t]);
    result.push(...attached);
  });
  return result;
}

let open_chicken = combination(chicken, m);

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < open_chicken.length; i++) {
  let sum = 0;
  for (let j = 0; j < house.length; j++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < open_chicken[i].length; k++) {
      min = Math.min(
        min,
        Math.abs(house[j].y - open_chicken[i][k].y) + Math.abs(house[j].x - open_chicken[i][k].x)
      );
    }
    sum += min;
  }
  answer = Math.min(answer, sum);
}
console.log(answer);
