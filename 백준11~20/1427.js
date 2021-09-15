let input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`.split(/\n/g);

let N = Number(input.shift());
const answer = Array.from({ length: N }, (_, i) => input[i].split(" "));
answer
  .sort((a, b) => a[0] * 1 - b[0] * 1)
  .forEach((v) => {
    console.log(`${v[0]} ${v[1]}`);
  });
