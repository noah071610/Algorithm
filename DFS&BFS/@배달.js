function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity);
  const arr = Array.from({ length: N + 1 }, () => []);

  road.forEach((v) => {
    let [v1, v2, time] = v;
    arr[v1].push([v2, time]);
    arr[v2].push([v1, time]);
  });

  let queue = [[1, 0]];
  dist[1] = 0;
  while (queue.length) {
    let [next, time] = queue.shift();
    arr[next].forEach((v, i) => {
      if (dist[v[0]] > dist[next] + v[1]) {
        dist[v[0]] = dist[next] + v[1];
        queue.push(v);
      }
    });
  }
  return dist.filter((v) => v <= K).length;
}

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
