var combinationSum = function (candidates, target) {
  let answer = new Set();
  candidates.sort((a, b) => a - b);
  function dfs(stack, sum) {
    if (sum < 0) return;
    if (sum === 0) return answer.add(JSON.stringify(stack.sort()));
    for (let i = 0; i < candidates.length; i++) {
      let temp = stack.slice(0);
      temp.push(candidates[i]);
      dfs(temp, sum - candidates[i]);
    }
  }
  dfs([], target);
  return [...answer].map((v) => JSON.parse(v));
};

console.log(combinationSum([1], 2));
