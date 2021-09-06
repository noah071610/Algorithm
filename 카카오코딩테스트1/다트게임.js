// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let answer = [];
  let target_number = "";
  for (let i = 0; i < dartResult.length; i++) {
    switch (dartResult[i]) {
      case "S":
        answer.push(parseInt(target_number) ** 1);
        target_number = "";
        break;
      case "D":
        answer.push(parseInt(target_number) ** 2);
        target_number = "";
        break;
      case "T":
        answer.push(parseInt(target_number) ** 3);
        target_number = "";
        break;
      case "*":
        answer[answer.length - 1] = answer[answer.length - 1] * 2;
        if (answer[answer.length - 2]) {
          answer[answer.length - 2] = answer[answer.length - 2] * 2;
        }
        break;
      case "#":
        answer.push(-answer.pop());
        break;
      default:
        target_number += dartResult[i];
    }
  }
  return answer.reduce((a, b) => a + b);
}
const dartResult = "1S*2T*3S";
console.log(solution(dartResult));
