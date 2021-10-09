function solution(n, results) {
  let arr = Array.from({ length: n }, (_, i) => [i + 1, 0]);
  results.forEach((v) => {
    arr[v[1] - 1][1] += 1;
    console.log(arr);
  });
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if(answer[])
  }
  return arr.sort((a, b) => a[1] - b[1]);
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
