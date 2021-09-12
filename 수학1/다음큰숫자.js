// https://programmers.co.kr/learn/courses/30/lessons/12911
// 자바스크립트 내장함수있는데도 2진수 변환 공부한게 생각나서 나도모르게 전부 구현해버렸고 결국 다시 작성했다.

function solution(n, m = n + 1) {
  return n.toString(2).match(/1/g).length == m.toString(2).match(/1/g).length
    ? m
    : solution(n, m + 1);
}

console.log(solution(78));
