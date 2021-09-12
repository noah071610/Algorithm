function solution(n) {
  let answer = 0;
  function getSome(start, target) {
    let num = 0;
    for (let i = start; i <= target; i++) {
      num += i;
      if (num === target) {
        return true;
      } else if (num > target) {
        return false;
      }
    }
  }
  for (let i = 1; i < Math.ceil(n / 2); i++) {
    if (getSome(i, n)) {
      answer++;
    }
  }
  return answer + 1;
}

console.log(solution(15));
