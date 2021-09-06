function solution(N, stages) {
  const answer = [];
  for (let i = 1; i <= N; i++) {
    let clear = 0;
    let unClear = 0;
    stages.forEach((v) => {
      if (v > i) {
        clear++;
      } else if (v === i) {
        unClear++;
      }
    });
    let fail_rate = unClear / (unClear + clear);
    answer.push([fail_rate, i]);
  }
  return answer.sort((a, b) => b[0] - a[0]).map(([rate, stage]) => stage);
}

const N = 5;

const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
