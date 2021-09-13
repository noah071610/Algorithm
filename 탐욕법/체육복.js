function solution(n, lost, reserve) {
  const clothes = Array.from({ length: n }, () => 1);
  for (let i = 0; i < clothes.length; i++) {
    if (lost.find((v) => v === i + 1)) {
      clothes[i] = clothes[i] - 1;
    }
    if (reserve.find((v) => v === i + 1)) {
      clothes[i] = clothes[i] + 1;
    }
  }
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] === 0) {
      continue;
    }
    if (i !== 0 && clothes[i] === 2 && clothes[i - 1] === 0) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    }
    if (i !== clothes.length - 1 && clothes[i] === 2 && clothes[i + 1] === 0) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }
  return clothes.filter((v) => v > 0).length;
}

const n = 3;
const lost = [3];
const reserve = [1];

console.log(solution(n, lost, reserve));
