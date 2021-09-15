function solution(expression) {
  function getNumberByOperator(x, y, oper) {
    if (oper === "*") {
      return x * y;
    }
    if (oper === "+") {
      return x + y;
    }
    if (oper === "-") {
      return x - y;
    }
  }
  let num = "";
  let exp_arr = [];
  let operator_arr = [
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["-", "*", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
  ];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i].match(/[\-*+]/g)) {
      exp_arr.push(num);
      exp_arr.push(expression[i]);
      num = "";
    } else {
      num += expression[i];
    }
  }
  exp_arr.push(num);
  exp_arr = exp_arr.map((v) => (v.match(/[0-9]/g) ? parseInt(v) : v));
  let max = 0;
  operator_arr.forEach((v) => {
    let temp = [...exp_arr];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === v[i]) {
          temp.splice(j - 1, 3, getNumberByOperator(temp[j - 1], temp[j + 1], temp[j]));
          j = 0;
        }
      }
    }
    max = Math.max(max, Math.abs(temp[0]));
  });
  return max;
}

const expression = "100-200*300-500+20";

console.log(solution(expression));
