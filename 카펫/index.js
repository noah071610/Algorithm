// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const totalSpace = brown + yellow;
  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    console.log(i);
    if (totalSpace % i !== 0) continue;
    const width = i;
    const height = totalSpace / i;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

const case1 = {
  brown: 10,
  yellow: 2,
};

console.log(solution(case1.brown, case1.yellow));
