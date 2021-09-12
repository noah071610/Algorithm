function solution(land) {
  function getMax(row, j) {
    return Math.max(...row.filter((_, i) => i !== j));
  }
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < land[1].length; j++) {
      land[i][j] = land[i][j] + getMax(land[i - 1], j);
    }
  }
  return Math.max(...land[land.length - 1]);
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

console.log(solution(land));
