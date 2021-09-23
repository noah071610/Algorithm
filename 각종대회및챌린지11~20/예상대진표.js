function solution(n, a, b) {
  let arr = Array.from({ length: n }, () => 0);
  arr.forEach((_, i) => {
    if (i + 1 === a || i + 1 === b) {
      arr[i] = 1;
    }
  });
  let cnt = 1;
  while (true) {
    let naljiBreak = false;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        if (arr[i + 1] === 0 && arr[i] === 0) {
          arr[i] = -1;
        }
        if (arr[i] === 1 && arr[i + 1] === 0) {
          arr[i + 1] = -1;
        }
        if (arr[i] === 0 && arr[i + 1] === 1) {
          arr[i] = -1;
        }
        if (arr[i] === 1 && arr[i + 1] === 1) {
          naljiBreak = true;
          break;
        }
      }
    }
    if (naljiBreak) {
      return cnt;
    }
    arr = arr.filter((v) => v !== -1);
    cnt++;
  }
}

console.log(solution(8, 4, 7));
