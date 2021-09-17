function combination(arr, selectedNum) {
  let result = [];
  if (selectedNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, i, origin) => {
    const rest = origin.slice(i + 1);
    const comb = combination(rest, selectedNum - 1);
    const attached = comb.map((t) => [v, ...t]);
    result.push(...attached);
  });
  return result;
}
function permutation(arr, selectedNum) {
  let result = [];
  if (selectedNum === 1) return arr.map((el) => [el]);
  arr.forEach((v, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const permu = permutation(rest, selectedNum - 1);
    const attached = permu.map((t) => [v, ...t]);
    result.push(...attached);
  });
  return result;
}

const dfs = (nums, num, arr = []) => {
  if (num === n) permus.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs([...nums.slice(0, i), ...nums.slice(i + 1)], num + 1, arr);
      arr.pop();
    }
  }
};

dfs(array, 0);

const arr = ["A", "B", "C"];

console.log(combination(arr, 3));
console.log(permutation(arr, 2));
