let n = Number("100");

let dp = Array.from({ length: 1001 }, () => 0);
dp[0] = "0";
dp[1] = "1";
dp[2] = "1";
if (n < 3) {
  console.log("1");
  return;
}
function getFibo(i) {
  let temp = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  dp[i] = temp.toString();
  if (i !== n) {
    getFibo(i + 1);
  } else {
    console.log(dp[i]);
  }
}

getFibo(3);
