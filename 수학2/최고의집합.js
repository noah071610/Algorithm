function solution(n, s) {
  var answer = [];
  let x = Math.floor(s / n);
  let y = s % n;
  console.log(x, y);
  if (x === 0) answer.push(-1);
  else {
    for (let i = 0; i < n; i++) {
      if (y === 0) {
        answer.push(x);
      } else {
        answer.push(x + 1);
        y--;
      }
    }
  }
  return answer.sort();
}

console.log(solution(5, 98));
