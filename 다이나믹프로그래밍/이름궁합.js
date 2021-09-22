let input = `CJMA
HERA`.split(/\n/g);

const A = input.shift();
const B = input.shift();

const index = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];

let dp = [];

for (let i = 0; i < A.length; i++) {
  dp[i] = index[A[i].charCodeAt() - 65] + index[B[i].charCodeAt() - 65];
}

while (dp.length > 2) {
  let arr = [];
  for (let i = 0; i < dp.length - 1; i++) {
    arr.push((dp[i] + dp[i + 1]) % 10);
  }
  dp = arr;
}
console.log(Number(String(dp[0]) + String(dp[1])));
