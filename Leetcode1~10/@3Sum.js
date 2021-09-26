var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let set = new Set();
  for (let i = 0; i < nums.length; ++i) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) set.add(JSON.stringify([nums[i], nums[j++], nums[k--]]));
      else if (sum < 0) j++;
      else if (sum > 0) k--;
    }
  }

  return [...set].map((e) => JSON.parse(e));
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
