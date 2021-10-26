var generate = function (numRows) {
  let pascal = [[1], [1, 1]];
  for (let i = 2; i <= numRows; i++) {
    pascal[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        pascal[i].push(1);
      } else {
        pascal[i].push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
      }
    }
  }
  return numRows === 1 ? [[1, 1]] : pascal[numRows];
};

console.log(generate(1));
