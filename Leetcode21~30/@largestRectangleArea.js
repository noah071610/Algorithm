// var largestRectangleArea = function (heights) {
//   heights.push(0);
//   let stack = [];
//   let res = 0;
//   for (let i = 0; i < heights.length; i++) {
//     let startIdx = i;
//     while (stack.length && stack[stack.length - 1][1] > heights[i]) {
//       const [pos, height] = stack.pop();
//       res = Math.max(res, (i - pos) * height);
//       startIdx = pos;
//     }
//     stack.push([startIdx, heights[i]]);
//   }
//   return res;
// };

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

let input = `7 2 1 4 5 1 3 3
4 1000 1000 1000 1000
5 5 10 5 11 10
0`.split(/\n/);
input.pop();

for (let k = 0; k < input.length; k++) {
  let heights = input[k].split(" ").map(Number);
  heights.push(0);
  let stack = [];
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let startIdx = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      const [pos, height] = stack.pop();
      res = Math.max(res, (i - pos) * height);
      startIdx = pos;
    }
    stack.push([startIdx, heights[i]]);
  }
  console.log(res);
}
