const combinationSum = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  function dfs(stack, index, target) {
    console.log(stack, { index, target });
    if (target < 0) return;
    if (target === 0) return res.push(stack);
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      let temp = Array.from(stack);
      temp.push(candidates[i]);
      dfs(temp, i + 1, target - candidates[i]);
    }
  }
  dfs([], 0, target);
  return res;
};

console.log(combinationSum([1, 2, 3, 4, 5], 7));
