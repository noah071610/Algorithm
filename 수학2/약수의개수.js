function solution(left, right) {
  let answer = 0;
  for (let n = left; n <= right; n++) {
    let cnt = 0;
    if (n < 1) continue;
    for (let i = 1; i <= n; i++) {
      if (!(n % i)) cnt++;
    }
    answer += !(cnt % 2) ? n : -n;
  }
  return answer;
}

const [left, right] = [13, 17];
console.log(solution(left, right));
