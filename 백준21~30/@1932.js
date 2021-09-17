let input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`.split(/\n/g);

let n = Number(input.shift());
let dp = [[Number(input[0])]];
for (let i = 1; i < input.length; i++) {
  let temp = input[i].split(" ").map((v) => +v);
  let arr = [];
  for (let j = 0; j < temp.length; j++) {
    if (j === 0) {
      arr.push(dp[i - 1][0] + Number(temp[j]));
    } else if (j === temp.length - 1) {
      arr.push(dp[i - 1][dp[i - 1].length - 1] + Number(temp[j]));
    } else {
      arr.push(Math.max(...dp[i - 1].slice(j - 1, j + 1)) + Number(temp[j]));
    }
  }
  dp.push(arr);
}
console.log(Math.max(...dp[dp.length - 1]));
