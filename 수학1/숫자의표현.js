function solution(n) {
  let answer = 0;
  function getSome(idx, sum) {
    if (sum > n) return false;
    if (sum === n) return true;
    return getSome(idx + 1, sum + idx + 1);
  }
  for (let i = 1; i < Math.ceil(n / 2); i++) {
    if (getSome(i, i)) answer++;
  }
  return answer + 1;
}

console.log(solution(15));
