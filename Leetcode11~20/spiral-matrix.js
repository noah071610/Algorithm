var spiralOrder = function (matrix) {
  let answer = [];
  for (let i = 0; i < Math.ceil(matrix[0].length / 2); i++) {
    for (let j = i; j < matrix[i].length - i; j++) answer.push(matrix[i][j]);
    for (let j = i + 1; j < matrix.length - i; j++)
      answer.push(matrix[j][matrix[i].length - 1 - i]);
    if (answer.length === matrix.length * matrix[0].length) {
      return answer;
    }
    for (let j = matrix[i].length - i - 2; j > i; j--)
      answer.push(matrix[matrix.length - 1 - i][j]);
    for (let j = matrix.length - 1 - i; j > i; j--) answer.push(matrix[j][i]);
    if (answer.length === matrix.length * matrix[0].length) {
      return answer;
    }
  }
  return answer;
};

console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
