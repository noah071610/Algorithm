var subsets = function (nums) {
  let answer = [];
  function dfs(arr, index) {
    if (arr[arr.length - 1] === nums[nums.length - 1]) return answer.push(arr);
    answer.push(arr);
    for (let i = index; i < nums.length; i++) {
      let temp = arr.slice(0);
      temp.push(nums[i]);
      dfs(temp, i + 1);
    }
  }
  dfs([], 0);
  return answer;
};

console.log(subsets([0]));
