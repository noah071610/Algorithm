const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  main(line);
}).on("close", () => process.exit());

const main = (pipe) => {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < pipe.length; i++) {
    if (pipe[i] === "(") {
      stack.push(pipe[i]);
    } else if (stack.length && pipe[i] === ")") {
      stack.pop();
      if (pipe[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  console.log(answer);
};
