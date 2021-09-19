let input = `5 3
1 2
3 4
1 3`.split(/\n/g);

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((v) => v.split(" ").map(Number));

let cnt = 0;
let arr = [];
for (let i = 1; i < n + 1; i++) {
  for (let j = i; j < n + 1; j++) {
    if (i !== j) {
      for (let k = j; k < n + 1; k++) {
        if (j !== k) {
          arr.push([i, j, k]);
        }
      }
    }
  }
}
console.log(arr);
arr.forEach((v) => {
  let isPossible = true;
  for (let i = 0; i < input.length; i++) {
    if (v.includes(input[i][0]) && v.includes(input[i][1])) {
      isPossible = false;
      break;
    }
  }
  if (isPossible) cnt++;
});

console.log(cnt);
