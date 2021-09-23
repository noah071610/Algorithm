function solution(numbers) {
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
  const answer = getCombination(numbers, 2);
  return [...new Set(answer.map((v) => v.reduce((a, b) => a + b)).sort((a, b) => a - b))];
}

const numbers = [5, 0, 2, 7];

console.log(solution(numbers));
