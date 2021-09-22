function solution(sticker) {
  let dp = [];
  let dp2 = [];
  if (sticker.length === 1) return sticker[0];
  dp[0] = sticker[0];
  dp[1] = sticker[0];
  for (let i = 2; i < sticker.length; i++) {
    dp[i] = Math.max(dp[i - 2] + sticker[i], dp[i - 1]);
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }
  return Math.max(...dp, ...dp2);
}

const sticker = [14, 6, 5, 11, 3, 9, 2, 10];

console.log(solution(sticker));
