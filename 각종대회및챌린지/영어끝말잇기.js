function solution(n, words) {
  let stack = [];
  let num = 2;
  let turn = 1;
  stack.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (words[i][0] !== words[i - 1][words[i - 1].length - 1] || stack.includes(words[i])) {
      return [num, turn];
    } else {
      stack.push(words[i]);
      num++;
      if (num === n + 1) {
        num = 1;
        turn++;
      }
    }
  }
  return [0, 0];
}

const n = 5;
const words = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];

console.log(solution(n, words));
