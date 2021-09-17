let input = `6
20 1 15 8 4 10`.split(/\n/g);

const n = Number(input[0]);

let array = input[1].split(" ").map((v) => +v);

let permus = [];
let answer = 0;

const dfs = (nums, num, arr = []) => {
  if (num === n) permus.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs([...nums.slice(0, i), ...nums.slice(i + 1)], num + 1, arr);
      arr.pop();
    }
  }
};

dfs(array, 0);
permus.forEach((v) => {
  let temp = 0;
  for (let i = 0; i < v.length - 1; i++) {
    temp += Math.abs(v[i] - v[i + 1]);
  }
  answer = Math.max(answer, temp);
});

console.log(answer);
