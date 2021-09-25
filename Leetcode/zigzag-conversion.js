var convert = function (str, numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  let k = 0;
  while (true) {
    for (let i = 0; i < arr.length; i++) {
      if (k > str.length - 1) {
        return arr.flat().join("");
      }
      arr[i].push(str[k]);
      k++;
    }
    for (let i = arr.length - 2; i > 0; i--) {
      if (k > str.length - 1) {
        return arr.flat().join("");
      }
      arr[i].push(str[k]);
      k++;
    }
  }
  return arr.flat().join("");
};

console.log(convert("PAYPALISHIRING", 3));
