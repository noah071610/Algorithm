function solution(sizes) {
  let w = 0;
  let h = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      w = Math.max(w, sizes[i][1]);
      h = Math.max(h, sizes[i][0]);
    } else {
      w = Math.max(w, sizes[i][0]);
      h = Math.max(h, sizes[i][1]);
    }
  }
  return w * h;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
