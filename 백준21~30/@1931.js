let input = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`.split(/\n/g);

let n = Number(input[0]);
input.shift();
for (let i = 0; i < n; i++) {
  let m = Number(input[3 * i]);
  let up = input[3 * i + 1].split(" ").map((v) => +v);
  let down = input[3 * i + 2].split(" ").map((v) => +v);
  let dp = [[0, up[0], down[0]]];
  for (let j = 1; j < m; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + up[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + down[j],
    ];
  }
  console.log(Math.max(...dp[m - 1]));
}
