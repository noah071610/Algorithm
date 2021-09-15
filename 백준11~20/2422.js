let input = `20
0
50
80
77
110
56
48`.split(/\n/g);

let temp = input
  .map((v, i) => [+v, i])
  .sort((a, b) => b[0] - a[0])
  .slice(0, 5);

console.log(temp.reduce((a, b) => a + b[0], 0));
console.log(...temp.sort((a, b) => a[1] - b[1]).map((v) => v[1] + 1));
