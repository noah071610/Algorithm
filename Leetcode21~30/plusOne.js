var plusOne = function (digits) {
  if (digits[digits.length - 1] + 1 === 10) {
    digits[digits.length - 1] = 0;
    if (digits.length === 1) return [1, 0];
    let j = digits.length - 2;
    while (true) {
      if (digits[j] + 1 === 10) {
        if (j === 0) {
          digits[j] = 0;
          digits.unshift(1);
          return digits;
        }
        digits[j] = 0;
        j--;
      } else {
        digits[j] = digits[j] + 1;
        return digits;
      }
    }
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  }
};

console.log(plusOne([9]));
