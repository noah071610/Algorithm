let input = `6
1
4
2
3
30
0`.split(/\n/g);

input = input.map((v) => +v);
input.pop();

let dp = Array.from({ length: 31 }, () => 0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= 31; i++) {
  let cnt = 0;
  for (let j = 0; j < i; j++) {
    console.log(j, i - 1 - j);
    cnt += dp[j] * dp[i - 1 - j];
  }
  dp[i] = cnt;
}

for (let i = 0; i < input.length; i++) {
  console.log(dp[input[i]]);
}
