var rotate = function (matrix) {
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    let stack = [];
    for (let j = i; j < matrix[i].length - i; j++) stack.push(matrix[i][j]);
    for (let j = i + 1; j < matrix.length - i; j++) stack.push(matrix[j][matrix.length - i - 1]);
    for (let j = matrix[i].length - i - 2; j >= i; j--)
      stack.push(matrix[matrix[i].length - i - 1][j]);
    for (let j = matrix.length - i - 2; j > i; j--) stack.push(matrix[j][i]);

    for (let k = 0; k < matrix[i].length - i * 2 - 1; k++) {
      stack.unshift(stack.pop());
    }

    for (let j = i; j < matrix[i].length - i; j++) matrix[i][j] = stack.shift();
    for (let j = i + 1; j < matrix.length - i; j++)
      matrix[j][matrix.length - i - 1] = stack.shift();
    for (let j = matrix[i].length - i - 2; j >= i; j--)
      matrix[matrix[i].length - i - 1][j] = stack.shift();
    for (let j = matrix.length - i - 2; j > i; j--) matrix[j][i] = stack.shift();
  }
  return matrix;
};

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
