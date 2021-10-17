function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i) + s.slice(0, i);
    let stack = [];
    let naljiBreak = false;
    for (let j = 0; j < temp.length; j++) {
      if (naljiBreak) break;
      switch (temp[j]) {
        case "]":
          if (stack[stack.length - 1] === "[") {
            stack.pop();
          } else {
            naljiBreak = true;
          }
          break;
        case ")":
          if (stack[stack.length - 1] === "(") {
            stack.pop();
          } else {
            naljiBreak = true;
          }
          break;
        case "}":
          if (stack[stack.length - 1] === "{") {
            stack.pop();
          } else {
            naljiBreak = true;
          }
          break;
        default:
          stack.push(temp[j]);
      }
    }
    if (naljiBreak) continue;
    if (!stack.length) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("[](){}"));
