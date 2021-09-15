function solution(n) {
  let arr = new Array(n).fill().map((_, i) => new Array(i + 1));
  let count = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = ++count;
    n -= 3;
  }
  return arr.flat();
}

console.log(solution(4));
