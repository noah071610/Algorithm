function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = Array.from({ length: tickets.length }, () => false);
  tickets.sort();
  const dfs = (str, count) => {
    result.push(str);
    if (count === tickets.length) {
      answer = result;
      return true;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true;
        if (dfs(tickets[i][1], count + 1)) return true;
        visited[i] = false;
      }
    }
    result.pop();
    return false;
  };
  dfs("ICN", 0);
  return answer;
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
