// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let stack = [];
  let cnt = 0;
  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][v - 1] !== 0) {
        if (stack[stack.length - 1] === board[i][v - 1]) {
          stack.pop();
          board[i].splice(v - 1, 1, 0);
          cnt += 2;
        } else {
          stack.push(board[i].splice(v - 1, 1, 0)[0]);
        }
        break;
      }
    }
  });
  return cnt;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
