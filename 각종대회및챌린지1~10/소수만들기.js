function solution(nums) {
  function isPrime(num) {
    if (num < 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function getCombination(arr, selectedNum) {
    const result = [];
    if (selectedNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, i, origin) => {
      const rest = origin.slice(i + 1);
      const combi = getCombination(rest, selectedNum - 1);
      const attached = combi.map((k) => [v, ...k]);
      result.push(...attached);
    });
    return result;
  }
  return getCombination(nums, 3)
    .map((v) => v.reduce((a, b) => a + b))
    .filter((k) => isPrime(k)).length;
}

const nums = [1, 2, 7, 6, 4];

console.log(solution(nums));
