let input = `4 4
2 2 2 1
2 2 1 3
2 1 3 3
1 3 3 3
4 4 4 1
4 4 1 3
4 1 3 3
1 3 3 3`.split(/\n/g);

const [n, m] = input.shift().split(" ").map(Number);

let before = Array.from({ length: n }, () => input.shift().split(" ").map(Number));
let after = Array.from({ length: n }, () => input.shift().split(" ").map(Number));

let isAlreadyDiff = false;
for (let i = 0; i < before.length; i++) {
  for (let j = 0; j < before[i].length; j++) {
    if (before[i][j] !== after[i][j]) {
      if (isAlreadyDiff) return console.log("NO");
      let queue = [[j, i]];
      let before_target = before[i][j];
      let after_target = after[i][j];
      queue.push([j, i]);
      before[i][j] = 0;
      after[i][j] = 0;
      while (queue.length) {
        let [x, y] = queue.shift();
        if (y !== n - 1 && before[y + 1][x] === before_target) {
          before[y + 1][x] = 0;
          if (after_target !== after[y + 1][x]) return console.log("NO");
          after[y + 1][x] = 0;
          queue.push([x, y + 1]);
        }
        if (x !== m - 1 && before[y][x + 1] === before_target) {
          before[y][x + 1] = 0;
          if (after_target !== after[y][x + 1]) return console.log("NO");
          after[y][x + 1] = 0;
          queue.push([x + 1, y]);
        }
        if (x !== 0 && before[y][x - 1] === before_target) {
          before[y][x - 1] = 0;
          if (after_target !== after[y][x - 1]) return console.log("NO");
          after[y][x - 1] = 0;
          queue.push([x - 1, y]);
        }
        if (y !== 0 && before[y - 1][x] === before_target) {
          before[y - 1][x] = 0;
          if (after_target !== after[y - 1][x]) return console.log("NO");
          after[y - 1][x] = 0;
          queue.push([x, y - 1]);
        }
      }
      isAlreadyDiff = true;
    }
  }
}

console.log("YES");

// for (let i = 0; i < arr.length; i++) {
//   let temp = JSON.parse(JSON.stringify(before));
//   for (let y = 0; y < temp.length; y++) {
//     for (let x = 0; x < temp[y].length; x++) {
//       if (arr[i][0][0] === x && arr[i][0][1] === y) {
//         temp[y][x] = 0;
//         arr[i].shift();
//         if (arr[i].length === 0) break;
//       }
//     }
//     if (arr[i].length === 0) break;
//   }
//   console.log(temp.map((v) => v.join("")));
//   console.log(after.map((v) => v.join("")));
//   let queue = [];
//   queue.push([0, 0]);
//   let isPossible = true;
//   while (queue.length) {
//     let [x, y] = queue.shift();
//     if (before[y][x] !== 0 && after[y][x] !== temp[y][x]) {
//       isPossible = false;
//       break;
//     }
//     if (y !== n - 1) {
//       queue.push([x, y + 1]);
//     }
//     if (x !== m - 1) {
//       queue.push([x + 1, y]);
//     }
//   }
//   if (isPossible) return console.log("YES");
// }

// console.log("NO");
