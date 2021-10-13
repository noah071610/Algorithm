var threeSumClosest = function (nums, target) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  let isPossibleSame = false;
  function dfs(idx, stack, curNum) {
    if (isPossibleSame) return;
    if (stack.length === 3) {
      if (curNum === target) return (isPossibleSame = true);
      if (curNum > target) {
        max = Math.min(max, curNum);
      }
      if (curNum < target) {
        min = Math.max(min, curNum);
      }
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      let temp = stack.slice(0);
      temp.push(nums[i]);
      dfs(i + 1, temp, curNum + nums[i]);
    }
  }
  dfs(0, [], 0);
  if (isPossibleSame) return target;
  return Math.abs(target - min) > Math.abs(target - max) ? max : min;
};

console.log(threeSumClosest([0, 1, 2], 3));
