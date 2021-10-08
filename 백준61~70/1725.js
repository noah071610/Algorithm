let input = `7
2
1
3`.split(/\n/g);
const n = input.shift();

let stack = [];
let histogram = input.map(Number);
histogram.push(0);
let res = 0;
for (let i = 0; i < histogram.length; i++) {
  let startIdx = i;
  while (stack.length && stack[stack.length - 1][1] > histogram[i]) {
    const [targetIdx, height] = stack.pop();
    res = Math.max(res, (i - targetIdx) * height);
    startIdx = targetIdx;
  }
  stack.push([startIdx, histogram[i]]);
}

res >= 10 ** 9 * 2 ? console.log(10 ** 9 * 2 - 1) : console.log(res);
