var canJump = function (nums) {
  let max = nums.length - 1;
  for (let i = max; i >= 0; i--) {
    if (i + nums[i] >= max) {
      max = i;
    }
  }
  return max === 0;
};

let nums = [2, 3, 1, 1, 4];

console.log(canJump(nums));
