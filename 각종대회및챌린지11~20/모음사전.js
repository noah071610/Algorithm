function solution(word) {
  let alphabet = ["A", "E", "I", "O", "U"];
  let naljiBreak = false;
  let cnt = 0;
  function dfs(depth, str) {
    if (!naljiBreak) {
      if (str === word) {
        return (naljiBreak = true);
      }
      if (depth === 5) return;
      for (let i = 0; i < 5; i++) {
        if (naljiBreak) break;
        str += alphabet[i];
        cnt++;
        dfs(depth + 1, str);
        str = str.slice(0, str.length - 1);
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    if (!naljiBreak) dfs(0, "");
  }
  return cnt;
}

console.log(solution("EIO"));
