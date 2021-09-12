function solution(s, n) {
  const digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      temp += " ";
      continue;
    }
    temp +=
      s[i].toUpperCase() === s[i]
        ? digit[(s[i].charCodeAt() - 65 + n) % 26]
        : digit[(s[i].toUpperCase().charCodeAt() - 65 + n) % 26].toLowerCase();
  }
  return temp;
}

const s = "a B z";
const n = 4;

console.log(solution(s, n));
