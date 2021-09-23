let input = "1 1 2";

let [r, c, w] = input.split(" ").map(Number);

let dp = [[1], [1, 1]];

let x = 2;

while (x !== r + w) {
  let arr = [1];
  for (let i = 1; i < x; i++) {
    arr.push(dp[x - 1][i - 1] + dp[x - 1][i]);
  }
  arr.push(1);
  dp.push(arr);
  x++;
}
let sum = 0;
for (let i = r - 1, x = c; i < r + w - 1; i++) {
  sum += dp[i].slice(c - 1, x).reduce((a, b) => a + b);
  x++;
}

console.log(sum);
