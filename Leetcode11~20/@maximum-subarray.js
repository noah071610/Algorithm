var maxSubArray = function (nums) {
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};

const nums = [-2, 1, -3, 4, -3, 2, 1, -5, 4];

console.log(maxSubArray(nums));
