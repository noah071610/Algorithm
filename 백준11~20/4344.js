let input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`.split(/\n/g);

for (let i = 1; i < input.length; i++) {
  const info = input[i].split(" ").map((v) => +v);
  const N = info.shift();
  const score = info.reduce((a, b) => a + b) / N;
  const percent = info.filter((v) => v > score).length / N;
  console.log((percent * 100).toFixed(3) + "%");
}
