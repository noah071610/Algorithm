let input = `11 3`;

const [n, k] = input.split(" ").map(Number);

let dp = [[1], [1, 1]];

let x = 2;
if (dp.length >= n) {
  console.log(dp[n - 1][k - 1]);
  return;
}
while (x !== n) {
  let arr = [1];
  for (let i = 1; i < x; i++) {
    arr.push(dp[x - 1][i - 1] + dp[x - 1][i]);
  }
  arr.push(1);
  dp.push(arr);
  x++;
  if (x === n) {
    console.log(dp[dp.length - 1][k - 1]);
    break;
  }
}
