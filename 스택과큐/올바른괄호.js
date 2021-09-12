function solution(s) {
  let stack = [];
  if (s[0] === ")") {
    return false;
  } else {
    stack.push(s[0]);
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? false : true;
}

const s = "()()";

console.log(solution(s));
