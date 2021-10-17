var generateMatrix = (n) => {
  let board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let circle = 0;
  let cur = 0;
  while (true) {
    for (let i = circle; i < n - circle; i++) board[circle][i] = ++cur;
    if (cur === n * n) break;
    for (let i = circle + 1; i < n - circle; i++) board[i][n - circle - 1] = ++cur;
    if (cur === n * n) break;
    for (let i = n - circle - 2; i >= circle; i--) board[n - circle - 1][i] = ++cur;
    if (cur === n * n) break;
    for (let i = n - circle - 2; i >= circle + 1; i--) board[i][circle] = ++cur;
    if (cur === n * n) break;
    circle++;
  }
  return board;
};

console.log(generateMatrix(6));
