let input = `6
10
3
7
4
12
14
2`.split(/\n/g);

const n = Number(input.shift());

input = input.map(Number);

let stack = [];
let res = 0;
for (let i = 0; i < n; i++) {
  while (stack.length !== 0 && stack[stack.length - 1] <= input[i]) {
    stack.pop();
  }
  stack.push(input[i]);
  res += stack.length - 1;
  console.log(stack);
}

console.log(res);
