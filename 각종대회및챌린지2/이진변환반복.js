function solution(s) {
  var answer = 0;
  let cnt = 0;
  function binaryChanger(s) {
    if (s !== "1") {
      answer += s.match(/0/g) ? s.match(/0/g).length : 0;
      cnt++;
      binaryChanger(s.replace(/0/g, "").length.toString(2));
    }
  }
  binaryChanger(s);
  return [cnt, answer];
}

const s = "01110";

console.log(solution(s));
