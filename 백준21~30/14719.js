let input = `3 5
0 0 0 2 0`.split(/\n/g);

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let map = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
input = input[0].split(" ").map((v) => +v);

for (let i = 0; i < map[0].length; i++) {
  let temp = input[i];
  for (let j = map.length - 1; j >= 0; j--) {
    if (temp === 0) {
      break;
    }
    temp--;
    map[j][i] = 1;
  }
}
let answer = 0;

for (let i = 0; i < map.length; i++) {
  let start = false;
  let cnt = 0;
  let temp_cnt = 0;
  for (let j = 0; j < map[i].length; j++) {
    if (map[i][j] === 1 && start) {
      cnt += temp_cnt;
      temp_cnt = 0;
    }
    if (map[i][j] === 1) {
      start = true;
    } else if (start && map[i][j] === 0) {
      temp_cnt++;
    }
  }
  answer += cnt;
}

console.log(answer);
