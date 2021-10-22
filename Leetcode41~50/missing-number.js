var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums[nums.length - 1]; i++) {
    if (i !== nums[i]) return i;
  }
  return nums[nums.length - 1] + 1;
};

console.log(missingNumber([0, 1, 3, 4, 5, 6, 9, 7, 8]));
