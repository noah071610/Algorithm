let input = `5 4
3
2 2
2 3
4 2`.split(/\n/g);

const end = input
  .shift()
  .split(" ")
  .map((v) => +v);

input.shift();

const map = Array.from({ length: end[1] }, () => Array.from({ length: end[0] }, () => 0));
const contruct = input.map((v) => v.split(" ").map((v) => +v));
let answer = 0;
function getRoute(x, y) {
  if (contruct.find((v) => v[0] === x && v[1] === y)) {
    return;
  } else if (x === end[0] && y === end[1]) {
    answer++;
    return;
  }
  if (x !== end[0]) {
    getRoute(x + 1, y);
  }
  if (y !== end[1]) {
    getRoute(x, y + 1);
  }
}

getRoute(1, 1);
console.log(answer);
