const input = `5
55 185
58 183
88 186
60 175
46 155`.split(/\n/g);

const n = Number(input[0]);

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map((v) => v * 1));
}
let answer = [];
for (let i = 0; i < arr.length; i++) {
  let lank = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
        lank++;
      }
    }
  }
  answer.push(lank + 1);
}

console.log(answer.join(" "));
