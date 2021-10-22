var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  nums = [...new Set(nums.sort((a, b) => a - b))];
  let cnt = 1;
  let answer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      cnt++;
    } else {
      answer = Math.max(answer, cnt);
      cnt = 1;
    }
  }
  answer = Math.max(answer, cnt);
  return answer;
};

console.log(longestConsecutive([1, 2, 0, 1, 1, 13, 3, 4]));
