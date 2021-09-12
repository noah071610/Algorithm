function solution(target, n) {
  let answer = "";
  let digit = "0123456789ABCDEF";

  while (target > n) {
    answer = digit[target % n] + answer;
    target = parseInt(target / n);
  }

  answer = digit[target] + answer;
  return answer;
}

function getDecimal(target, n) {
  let answer = 0;
  let digit = "0123456789ABCDEF";
  let j = target.length - 1;
  for (let i = 0; i < target.length; i++) {
    answer += digit.indexOf(target[i]) * n ** j;
    j--;
  }
  return answer;
}

function binary(n) {
  let answer = "";
  while (n > 2) {
    answer = (n % 2) + answer;
    n = parseInt(n / 2);
  }
  answer = n + answer;
  return answer;
}

function easy2solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

const input = { target: 322, num: 8 };
const getSome = solution(input.target, input.num);

console.log(`10진법(${input.target}) => ${input.num}진법`, getSome);
console.log(`${input.num}진법(${getSome}) => 10진법`, getDecimal(getSome, input.num));
