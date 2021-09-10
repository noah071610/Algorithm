// https://programmers.co.kr/learn/courses/30/lessons/17679

// 나는 내가 정말 롱코딩하는줄알았다.. 정말 절망적으로 아 그냥 무조건 풀기만 하자라는 마음으로 자포자기로 했다

// 근데 다른 풀이를 보니까 나보다 더 복잡한게 많더라
// 시간복잡도도 이정도면 나쁘지않다

function solution(m, n, board) {
  var answer = 0;
  let new_board = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < m; j++) {
      arr.push([board[j][i], 1]);
    }
    new_board.push(arr);
  }
  board = new_board;
  while (true) {
    let answer_origin = answer;
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        let a = board[i - 1][j - 1];
        let b = board[i - 1][j];
        let c = board[i][j - 1];
        let d = board[i][j];
        if (a[1] === -1 || b[1] === -1 || c[1] === -1 || d[1] === -1) {
          continue;
        }
        if (a[0] === b[0] && b[0] === c[0] && c[0] === d[0] && d[0] === a[0]) {
          if (board[i - 1][j - 1][1] === 1) {
            answer++;
            board[i - 1][j - 1][1] = 0;
          }
          if (board[i - 1][j][1] === 1) {
            answer++;
            board[i - 1][j][1] = 0;
          }
          if (board[i][j - 1][1] === 1) {
            answer++;
            board[i][j - 1][1] = 0;
          }
          if (board[i][j][1] === 1) {
            answer++;
            board[i][j][1] = 0;
          }
        }
      }
    }
    if (answer_origin === answer) {
      break;
    }
    board = board.map((v) => {
      v = v.map((t) => (t[1] === 0 ? [t[0], -1] : t));
      return v.sort((a, b) => a[1] - b[1]);
    });
  }
  return answer;
}

const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

const n = 5;
const m = 4;
console.log(solution(m, n, board));
