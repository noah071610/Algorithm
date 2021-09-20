let input = `3
2 2
1 5
13 29`.split(/\n/g);

const n = Number(input.shift());

const factorial = (num) => {
  return num > 1 ? num * factorial(num - 1) : 1;
};

input.forEach((el) => {
  const numbers = el
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const min = numbers[0];
  const max = numbers[1];
  const answer = factorial(max) / (factorial(min) * factorial(max - min));
  console.log(parseInt(answer + 0.5));
});
