function solution(n, t, m, p) {
  var answer = "";
  let k = 0;
  let order = 1;
  let naljiBreak = false;
  while (!naljiBreak) {
    const target = k.toString(n);
    for (let i = 0; i < target.length; i++) {
      if (order === p) {
        answer += target[i].toUpperCase();
      }
      if (answer.length >= t) {
        naljiBreak = true;
        break;
      }
      order++;
      if (order > m) order = 1;
    }
    k++;
  }
  return answer;
}

console.log(solution(16, 16, 2, 1));
