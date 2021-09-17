let input = `6
16
10
500
8500
9990
30`.split(/\n/g);

const n = Number(input.shift());
input = input.map((v) => +v);

let max = Number(input[n - 1]);

let dp = Array.from({ length: max + 1 }, (_, i) => i);

for (let i = 2; i * i <= max; i++) {
  if (dp[i]) {
    for (let j = i * i; j <= max; j = j + i) {
      dp[j] = false;
    }
  }
}

dp = dp.filter((v) => v !== false).slice(2);

let answer = { x: 10000, y: 0 };
const solution = (num, index) => {
  if (dp[index] > Math.ceil(num / 2)) {
    return;
  }
  let temp = dp[index];
  let finder = dp.filter((v) => v + temp === num);
  if (finder.length !== 0) {
    for (let i = 0; i < finder.length; i++) {
      if (Math.abs(answer.x - answer.y) > Math.abs(finder[i] - temp)) {
        answer.x = finder[i];
        answer.y = temp;
      }
    }
  }
  solution(num, index + 1);
};

for (let i = 0; i < n; i++) {
  solution(input[i], 0, input[i]);
  console.log(
    Object.values(answer)
      .sort((a, b) => a - b)
      .join(" ")
  );
  answer.x = 10000;
  answer.y = 0;
}
