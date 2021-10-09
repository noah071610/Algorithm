let input = `6
1 0 1 0 1 3
5`.split(/\n/g);

const n = Number(input.shift());
const s = Number(input.pop());
let bridge = input.pop().split(" ").map(Number);
let visited = Array.from({ length: n }, () => false);
let cnt = 0;
function dfs(cur) {
  if (cur > n - 1 || cur < 0) return;
  if (!visited[cur]) {
    visited[cur] = true;
    cnt++;
    for (let i = 1; i <= bridge[cur]; i++) {
      dfs(cur + i);
      dfs(cur - i);
    }
  }
}
dfs(s - 1);
console.log(cnt);
