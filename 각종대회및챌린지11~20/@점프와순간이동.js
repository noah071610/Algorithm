function solution(n) {
  let bettery = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      bettery++;
      n -= 1;
    }
  }
  return bettery;
}

console.log(solution(7));
