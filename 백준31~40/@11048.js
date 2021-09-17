let input = `4 3
1 2 3
6 5 4
7 8 9
12 11 10`.split(/\n/g);

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const map = Array.from({ length: n }, () =>
  input
    .shift()
    .split(" ")
    .map((v) => +v)
);

let dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

let temp = [];
for (let i = 0; i < map[0].length; i++) {
  let sum = 0;
  for (let j = i; j >= 0; j--) {
    sum += map[0][j];
  }
  temp.push(sum);
}

dp[0] = temp;

for (let i = 1; i < map.length; i++) {
  for (let j = 0; j < map[i].length; j++) {
    if (j === 0) {
      dp[i][j] = map[i][j] + Math.max(dp[i - 1][j]);
    } else {
      dp[i][j] = map[i][j] + Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}
console.log(dp[n - 1][m - 1]);

// let answer = 0;
// function step(x, y, candy) {
//   candy += map[y][x];
//   if (y === n - 1 && x === m - 1) {
//     answer = Math.max(answer, candy);
//   } else {
//     if (x !== m - 1) {
//       step(x + 1, y, candy);
//     }
//     if (y !== n - 1) {
//       step(x, y + 1, candy);
//     }
//     if (y === n - 1 && x === m - 1) {
//       step(x + 1, y + 1, candy);
//     }
//   }
// }
