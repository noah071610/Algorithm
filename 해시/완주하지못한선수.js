// https://programmers.co.kr/learn/courses/30/lessons/42576

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

let input = [];
//1) leo kiki eden
//2) eden kiki
r1.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    console.log(solution(input[0].split(" "), input[1].split(" ")));
    r1.close();
  }
}).on("close", function () {
  process.exit();
});
