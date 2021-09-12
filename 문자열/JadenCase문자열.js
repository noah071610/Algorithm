function solution(s) {
  return s
    .split(" ")
    .map((v) => {
      if (v) {
        return v[0].toUpperCase() + v.slice(1).toLowerCase() + " ";
      } else {
        return " ";
      }
    })
    .join("")
    .slice(0, s.length);
}

const s = "3people  unFollowed me";
console.log(solution(s));
