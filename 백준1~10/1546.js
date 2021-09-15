let input = ["5", "1 2 4 8 16"];

let N = input[0];
let answer = 0;
let scores = input[1].split(" ").map((v) => +v);
let top = Math.max(...scores);
scores.forEach((v) => {
  answer += (v / top) * 100;
});
console.log(answer / N);
