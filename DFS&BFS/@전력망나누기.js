function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;
  let tree = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);
  let cnt = 1;
  wires.forEach((v) => {
    let [v1, v2] = v;
    tree[v1].push(v2);
    tree[v2].push(v1);
  });
  tree.forEach((v, cur) => {
    for (let i = 0; i < v.length; i++) {
      if (v.length === 1) {
        answer = Math.min(answer, Math.abs(cnt - (tree.length - 1 - cnt)));
        cnt = 1;
        break;
      } else {
        const temp = [...v.slice(0, i), ...v.slice(i + 1)];
        for (let j = 0; j < temp.length; j++) {
          dfs(temp[j], cur);
        }
        visited = Array.from({ length: n + 1 }, () => false);
        answer = Math.min(answer, Math.abs(cnt - (tree.length - 1 - cnt)));
        cnt = 1;
      }
    }
  });
  function dfs(wire, cur) {
    if (visited[wire]) return;
    cnt++;
    visited[wire] = true;
    tree[wire].forEach((v) => {
      if (!visited[v] && cur !== v) dfs(v);
    });
  }
  return answer;
}

const wires = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];

console.log(solution(7, wires));
