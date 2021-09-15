let input = "2 1 5";

let [a, b, v] = input.split(" ").map((v) => +v);
console.log(Math.ceil((v - b) / (a - b)));
