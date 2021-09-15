let input = "99";

let N = +input;
let cnt = 0;
while (true) {
  if (N % 5 === 0) {
    console.log(cnt + N / 5);
    break;
  }
  if (N < 0) {
    console.log(-1);
    break;
  }
  N -= 3;
  cnt++;
}
