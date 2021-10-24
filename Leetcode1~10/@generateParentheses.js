var generateParenthesis = function (n) {
  let answer = [];
  function dfs(index, s) {
    if (index === n * 2) {
      let stack = [];
      let naljiBreak = false;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
          stack.push(s[i]);
        } else {
          if (stack.length === 0) {
            naljiBreak = true;
            break;
          }
          stack.pop();
        }
      }
      return stack.length === 0 && !naljiBreak && answer.push(s);
    }
    dfs(index + 1, s + "(");
    dfs(index + 1, s + ")");
  }
  dfs(0, "");
  return answer;
};

console.log([1, 2, 3, 3].findIndex((v) => v === 4));
