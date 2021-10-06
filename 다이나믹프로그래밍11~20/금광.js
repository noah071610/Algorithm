function solution(arr) {
  let dp = Array.from({ length: arr.length }, () => Array.from({ length: arr[0].length }, () => 0));
  for (let i = 0; i < arr.length; i++) {
    dp[i][0] = arr[i][0];
  }
  let answer = 0;
  for (let i = 1; i < arr[0].length; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (j === 0) {
        dp[j][i] = Math.max(dp[j][i - 1] + arr[j][i], dp[j + 1][i - 1] + arr[j][i]);
      } else if (j === arr.length - 1) {
        dp[j][i] = Math.max(dp[j][i - 1] + arr[j][i], dp[j - 1][i - 1] + arr[j][i]);
      } else {
        dp[j][i] = Math.max(
          dp[j][i - 1] + arr[j][i],
          dp[j + 1][i - 1] + arr[j][i],
          dp[j - 1][i - 1] + arr[j][i]
        );
      }
      temp.push(dp[j][i]);
    }
    answer = Math.max(answer, ...temp);
  }
  return answer;
}

const arr = [
  [1, 3, 3, 2],
  [2, 1, 4, 1],
  [0, 6, 4, 7],
];

console.log(solution(arr));
