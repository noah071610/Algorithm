// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const answer = numbers
    .map((v, i) => v + "")
    .sort((a, b) => b + a * 1 - (a + b * 1))
    .join("")
    .toString();
  return answer[0] === "0" ? "0" : answer;
}

const case1 = [6, 10, 2];
const case2 = [3, 30, 34, 5, 9];

console.log(solution(case1));
console.log(solution(case2));
