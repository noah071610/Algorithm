function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let cnt = 0;
    times.forEach((v) => {
      cnt += parseInt(mid / v);
      console.log(mid, cnt);
      if (cnt >= n) {
        answer = Math.min(answer, mid);
      }
    });
    console.log("");
    if (cnt >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10, 2]));
