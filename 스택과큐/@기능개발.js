// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const stack = [];
  const answer = [];
  for (let i = 0; i < progresses.length; i++) {
    let temp = progresses[i];
    let day = 0;
    while (temp < 100) {
      temp += speeds[i];
      day++;
    }
    stack.push(day);
  }
  console.log(stack);
  let day = 1;
  stack.reduce((acc, cur) => {
    if (acc >= cur) {
      day++;
      return acc;
    } else {
      answer.push(day);
      day = 1;
      return cur;
    }
  });
  answer.push(day);
  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
