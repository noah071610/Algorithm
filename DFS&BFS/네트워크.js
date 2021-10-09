function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);
  const dfs = (v) => {
    if (visited[v]) {
      return;
    }
    visited[v] = true;
    computers[v].forEach((k, j) => {
      if (!visited[j] && k) {
        dfs(j);
      }
    });
  };
  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
