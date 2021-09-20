let input = `9
____*____
*********
____*____
____*____
____*____
___*_*___
___*_*___
___*_*___
___*_*___`.split(/\n/g);

const n = Number(input.shift());

const board = Array.from({ length: n }, () => input.shift().split(""));

let waist = 0;
let heart = 0;
let left_leg = 0;
let right_leg = 0;
for (let i = 0; i < board.length; i++) {
  let sum = 0;
  for (let j = 0; j < board[i].length; j++) {
    if (
      i >= 1 &&
      board[i][j] === "*" &&
      board[i - 1][j] === "*" &&
      board[i][j - 1] === "*" &&
      board[i][j + 1] === "*"
    ) {
      heart = [i, j];
      while (true) {
        if (board[++i][j] === "*") {
          waist++;
        } else {
          while (i < board.length) {
            if (board[i][j - 1] === "*") {
              left_leg++;
            }
            if (board[i][j + 1] === "*") {
              right_leg++;
            }
            i++;
          }
          break;
        }
      }
      break;
    }
  }
}
let arm = board[heart[0]];
console.log(heart.map((v) => v + 1).join(" "));
console.log(
  arm.slice(0, heart[1]).filter((v) => v === "*").length,
  arm.slice(heart[1] + 1).filter((v) => v === "*").length,
  waist,
  left_leg,
  right_leg
);
