function solution(maps) {
  var answer = -1;
  const max_x = maps[0].length - 1;
  const max_y = maps.length - 1;
  if (maps[max_y][max_x - 1] === 0 && maps[max_y - 1][max_x] === 0) {
    return answer;
  }
  const queue = [[0, 0, 1]];
  while (queue.length !== 0) {
    let [x, y, cnt] = queue.shift();
    if (x === max_x && y === max_y) {
      if (answer === -1) {
        answer = cnt;
      } else {
        answer = Math.min(answer, cnt);
      }
    } else {
      maps[y][x] = 0;
      if (y !== 0 && maps[y - 1][x] !== 0) {
        queue.push([x, y - 1, cnt + 1]);
      }
      if (x !== max_x && maps[y][x + 1] !== 0) {
        queue.push([x + 1, y, cnt + 1]);
      }
      if (y !== max_y && maps[y + 1][x] !== 0) {
        queue.push([x, y + 1, cnt + 1]);
      }
      if (x !== 0 && maps[y][x - 1] !== 0) {
        queue.push([x - 1, y, cnt + 1]);
      }
    }
  }
  return answer;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));
