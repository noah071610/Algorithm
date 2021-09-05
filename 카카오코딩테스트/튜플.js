function solution(s) {
  var answer = [];
  let turple = s
    .slice(2, -2)
    .split("},{")
    .map((v) => v.split(",").map((v) => v * 1));
  turple.sort((a, b) => a.length - b.length);
  if (turple.length === 1) {
    return turple[0];
  }
  answer.push(turple[0][0]);
  for (let i = 1; i < turple.length; i++) {
    answer.push(turple[i].find((x) => !turple[i - 1].includes(x)));
  }
  return answer;
}

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

console.log(solution(s));
