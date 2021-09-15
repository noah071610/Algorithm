let input = "baaa";

if (input.length === 1) {
  return console.log(input.toUpperCase());
}

const answer = Object.entries(
  input
    .split("")
    .map((v) => v.toUpperCase())
    .reduce((acc, cur, i, origin) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {})
).sort((a, b) => b[1] - a[1]);

console.log(answer[0][1] === answer[1][1] ? "?" : answer[0][0]);
