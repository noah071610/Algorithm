let input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34`.split(/\n/g);

function getCombination(arr, selectedNum) {
  let result = [];
  if (selectedNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, i, origin) => {
    const rest = origin.slice(i + 1);
    const comb = getCombination(rest, selectedNum - 1);
    const attached = comb.map((t) => [v, ...t]);
    result.push(...attached);
  });
  return result;
}

for (let i = 0; i < input.length; i++) {
  let target = input[i].split(" ").map((v) => +v);
  let k = target.shift();
  const answer = getCombination(target, 6);
  for (let j = 0; j < answer.length; j++) {
    console.log(...answer[j]);
  }
  console.log("");
}
