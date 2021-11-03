function solution(p) {
  var answer = "";
  function isRight(str) {
    if (str.length === 0) return;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        stack.push(str[i]);
      } else {
        if (!stack.length || stack[stack.length - 1] === ")") {
          return false;
        } else {
          stack.pop();
        }
      }
    }
    return stack.length ? false : true;
  }
  function dfs(start, end) {
    let [open, close] = [0, 0];
    let [u, v] = [p.slice(start, end + 1), p.slice(end + 1)];
    if (u.length === 0) return;
    for (let i = 0; i < u.length; i++) {
      u[i] === "(" ? open++ : close++;
    }
    if (open === close && open !== 0 && close !== 0) {
      if (isRight(u)) {
        answer += u;
        if (v === 0) {
          return;
        } else {
          dfs(end + 1, end + 2);
        }
      } else {
        answer += "(";
        dfs(end + 1, end + 2);
        answer += ")";
        answer += u
          .slice(1, u.length - 1)
          .split("")
          .map((v) => (v === "(" ? ")" : "("))
          .join("");
      }
    } else {
      dfs(start, end + 1);
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution("))((()"));
