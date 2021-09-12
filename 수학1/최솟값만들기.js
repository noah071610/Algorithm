function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num += A[i] * B[i];
  }
  return num;
}

const A = [1, 4, 2];
const B = [5, 4, 4];

console.log(solution(A, B));
