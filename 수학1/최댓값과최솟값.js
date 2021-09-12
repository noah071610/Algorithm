function solution(s) {
  s = s
    .split(" ")
    .map((v) => v * 1)
    .sort((a, b) => a - b);
  console.log(s);
  return `${s[0]} ${s[s.length - 1]}`;
}

const s = "-1 -2 -3 -4";

console.log(solution(s));
