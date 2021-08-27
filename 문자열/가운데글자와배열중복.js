// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log(solution("qwer"));

function solution2(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

console.log(solution2([1, 1, 3, 3, 0, 1, 1]));
