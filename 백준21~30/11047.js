let input = `10 444221
1
5
10
50
100
500
1000
5000
10000
50000`.split(/\n/g);

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((v) => +v).sort((a, b) => b - a);
let answer = 0;
for (let i = 0; i < n; i++) {
  if (m === 0) {
    break;
  }
  let calc = Math.floor(m / input[i]);
  if (calc) {
    answer += calc;
    m = m % input[i];
  }
}
console.log(answer);
