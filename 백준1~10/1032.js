let input = `3
confia.sys
config.inf
conxig.res`.split(/\n/g);

let N = Number(input.shift());

let answer = "";

for (let i = 0; i < input[0].length; i++) {
  let naljiBreak = false;
  for (let j = 0; j < input.length - 1; j++) {
    if (input[j][i] !== input[j + 1][i]) {
      answer += "?";
      naljiBreak = true;
      break;
    }
  }
  if (!naljiBreak) {
    answer += input[0][i];
  }
}

console.log(answer);
