var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const n1 = s1.length;
  const n2 = s2.length;
  const dp = [...Array(n1 + 1)].map((r) => Array(n2 + 1).fill(false));

  for (let r = 0; r <= n1; r++) {
    for (let c = 0; c <= n2; c++) {
      if (r === 0 && c === 0) {
        dp[r][c] = true;
      } else if (r === 0) {
        dp[r][c] = dp[r][c - 1] && s3[c - 1] === s2[c - 1];
      } else if (c === 0) {
        dp[r][c] = dp[r - 1][c] && s3[r - 1] === s1[r - 1];
      } else {
        dp[r][c] =
          (dp[r - 1][c] && s3[r + c - 1] === s1[r - 1]) ||
          (dp[r][c - 1] && s3[r + c - 1] === s2[c - 1]);
      }
    }
  }
  console.log(dp);
  return dp[n1][n2];
};

let s1 = "aab";
let s2 = "axy";
let s3 = "aaxaby";
console.log(isInterleave(s1, s2, s3));
