let input = "1";

let num = 0;
let count = 0;
let N = +input;
while (true) {
  num = Math.floor(N / 10) + (N % 10);
  N = (N % 10) * 10 + (num % 10);
  count++;
  if (N == input) {
    console.log(count);
    break;
  }
}
