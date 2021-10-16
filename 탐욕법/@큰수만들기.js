function solution(number, k) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    const item = number[i];
    if (stack.length === 0) {
      stack.push(item);
      continue;
    }
    while (stack[stack.length - 1] < item) {
      console.log(stack, item, count);
      stack.pop();
      count++;
      if (count === k) return stack.join("") + number.slice(i, number.length);
      if (stack.length === 0) break;
    }
    stack.push(item);
  }
  return stack.join("").slice(0, number.length - k + count);
}

const number = "4177252841";

const k = 3;

console.log(solution(number, k));
