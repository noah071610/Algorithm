// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const answer = [];
  let win = 7;
  let x = 0;
  lottos.forEach((v) => {
    if (v === 0) {
      x++;
    } else {
      win_nums.find((t) => t === v) && win--;
    }
  });
  return [win - x === 7 ? 6 : win - x, win === 7 ? 6 : win];
}

const lottos = [8, 8, 8, 8, 8, 8];
const win_nums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, win_nums));
