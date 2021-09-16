let input = `a
tv
ptoui
bontres
zoggax
wiinq
eep
houctuh
end`.split(/\n/g);

console.log(input);

const vows = ["a", "e", "i", "o", "u"];

for (let k = 0; k < input.length - 1; k++) {
  let x = 0;
  let y = 0;
  let z = 0;
  let isPossible = true;
  const word = input[k].split("");
  for (let i = 0; i < input[k].length; i++) {
    if (i !== input[k].length - 1 && word[i] === word[i + 1]) {
      if (word[i] !== "e" && word[i] !== "o") {
        isPossible = false;
        break;
      }
    }
    let vow = vows.find((v) => v === word[i]);
    if (vow) {
      z++;
      x++;
      y = 0;
      if (x === 3) {
        isPossible = false;
        break;
      }
    } else {
      y++;
      x = 0;
      if (y === 3) {
        isPossible = false;
        break;
      }
    }
  }
  if (!z) {
    console.log(`<${input[k]}> is not acceptable.`);
  } else {
    isPossible
      ? console.log(`<${input[k]}> is acceptable.`)
      : console.log(`<${input[k]}> is not acceptable.`);
  }
}
