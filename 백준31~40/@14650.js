let input = "3";
let n = Number(input);
let answer = 0;
function make_number(num, sum) {
  for (let i = 0; i < 3; i++) {
    if (num === 0 && i === 0) {
      continue;
    }
    if (n === num) {
      if (sum % 3 === 0) {
        answer++;
        return;
      }
    } else {
      make_number(num + 1, parseInt(sum.toString() + i.toString()));
    }
  }
}

make_number(0, 0);
console.log(answer);
