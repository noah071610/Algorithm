var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }
  const temp = nums.findIndex((v) => v === target);
  if (temp === -1) {
    return [-1, -1];
  } else {
    let j = 0;
    for (let i = temp; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
        j++;
      } else {
        break;
      }
    }
    return [temp, temp + j];
  }
};
