// var fs = require("fs")
// var input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n");

let input = "2 1 2";

const [n, lim, kim] = input.split(" ");

let list = Array.from({ length: Number(n) }, () => 0);

list[Number(lim) - 1] = 1;
list[Number(kim) - 1] = 1;

let cnt = 0;
let naljiBreak = false;
while (!naljiBreak && list.length > 1) {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      if (i + 1 === list.length) {
        break;
      }
      if (list[i] + list[i + 1] === 2) {
        naljiBreak = true;
        break;
      } else if (list[i] + list[i + 1] === 1) {
        if (list[i] === 0) {
          list[i] = -1;
        }
        if (list[i + 1] === 0) {
          list[i + 1] = -1;
        }
      } else {
        list[i] = -1;
      }
    }
  }
  list = list.filter((v) => v !== -1);
  cnt++;
  console.log(`#`, cnt);
}
naljiBreak ? console.log(cnt) : console.log(-1);
