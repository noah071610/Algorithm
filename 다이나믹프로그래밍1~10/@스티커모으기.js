function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  const dp = [];
  const dp2 = [];
  dp[0] = sticker[0];
  dp[1] = sticker[0];
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < sticker.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + sticker[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }
  dp.pop();
  return Math.max(dp[dp.length - 1], dp2[dp2.length - 1]);
}

const sticker = [14, 6, 99, 11, 3, 9, 2, 10];

console.log(solution(sticker));
