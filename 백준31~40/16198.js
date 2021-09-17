let input = `5
1 1 1 1 1 1 1 1 1 1`.split(/\n/g);

let n = Number(input.shift());

input = input[0].split(" ").map((v) => +v);
let answer = 0;
function get_energy(arr, sum) {
  if (arr.length === 2) {
    answer = Math.max(answer, sum);
  }
  let temp = [...arr];
  for (let i = 1; i < temp.length - 1; i++) {
    let rest = [...temp.slice(0, i), ...temp.slice(i + 1)];
    get_energy(rest, sum + temp[i - 1] * temp[i + 1]);
  }
}

get_energy(input, 0);
console.log(answer);
