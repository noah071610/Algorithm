let input = "23";

let n = Number(input);
let temp = n % 5;
if (n === 1 || n === 3) {
  return console.log(-1);
}

if (temp % 2 === 0) {
  return console.log(parseInt(n / 5) + temp / 2);
} else {
  return console.log(parseInt(n / 5) - 1 + (temp + 5) / 2);
}
