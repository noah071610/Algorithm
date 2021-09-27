var firstMissingPositive = function (nums) {
  if (nums.length < 1) {
    return 1;
  }
  let myHash = {};
  for (let num of nums) {
    if (num > 0) myHash[num] = true;
  }
  let missing = 1;
  for (missing; missing <= nums.length; missing++) {
    if (!myHash[missing]) {
      return missing;
    }
  }
  return missing;
};

console.log(firstMissingPositive([0, 2, 2, 1, 1]));
