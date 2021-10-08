let input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`.split(/\n/);

const N = Number(input.shift());
let graph = [...Array(N + 1)].map(() => []);
let visited = Array(N + 1).fill(false);
let res = 0;
input.splice(0, 1);

input.forEach((str) => {
  let [v1, v2] = str.split(" ").map(Number);
  graph[v1].push(v2);
  graph[v2].push(v1);
});

const dfs = (v) => {
  if (visited[v]) {
    return;
  }
  visited[v] = true;
  res++;
  graph[v].forEach((k) => {
    if (!visited[k]) {
      dfs(k);
    }
  });
};

dfs(1);
console.log(res - 1);
