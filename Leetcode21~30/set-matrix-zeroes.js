var setZeroes = function (matrix) {
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) zeros.push({ x: j, y: i });
    }
  }
  zeros.forEach((v) => {
    matrix[v.y] = matrix[v.y].map(() => 0);
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][v.x] = 0;
    }
  });
  return matrix;
};

console.log(
  setZeroes([
    [1, 4, 9],
    [9, 0, 1],
    [0, 3, 1],
  ])
);
