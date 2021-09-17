let input = `4 6
a t c i s w`.split(/\n/g);

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

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

input = input[0].split(" ").sort();

const combis = getCombination(input, n);

combis.forEach((v) => {
  let cnt = 0;
  if (v.includes("a")) cnt++;
  if (v.includes("e")) cnt++;
  if (v.includes("i")) cnt++;
  if (v.includes("o")) cnt++;
  if (v.includes("u")) cnt++;
  if (v.length - cnt >= 2 && cnt >= 1) console.log(v.join(""));
});
