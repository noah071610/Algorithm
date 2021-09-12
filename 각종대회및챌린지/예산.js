function solution(d, budget) {
  if (d.length === 1) {
    return d[0] > budget ? 0 : 1;
  }
  d.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    cnt++;
    if (budget < 0) {
      return cnt - 1;
    } else if (budget === 0) {
      return cnt;
    }
  }
  return cnt;
}

const [d, budget] = [[1, 1, 1, 1, 5, 1, 1], 10];

console.log(solution(d, budget));
