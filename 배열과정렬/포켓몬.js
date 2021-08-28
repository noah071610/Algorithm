function solution(nums) {
  const a = nums.length / 2;
  return [...new Set(nums)].length < a ? [...new Set(nums)].length : a;
}

const nums = [3, 1, 2, 3];

console.log(solution(nums));
