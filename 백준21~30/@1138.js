let input = `6
4 4 2 2 1 0`.split(/\n/g);

let n = parseInt(input[0]);

let list = input[1].split(" ").map((el) => parseInt(el));

let dp = new Array(n).fill(0);

for (let i = 1; i < n + 1; i++) {
  let temp = list[i - 1];
  let count = 0;
  console.log(i);
  for (let j = 0; j < n; j++) {
    console.log(count, temp, dp[j]);
    if (count === temp && dp[j] === 0) {
      dp[j] = i;
      break;
    } else if (dp[j] === 0) {
      count += 1;
    }
  }
  console.log(dp);
}

console.log(...dp);
