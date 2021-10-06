function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());
  for (let i = 0; i < 8; i++) {
    set[i].add(Number(N.toString().repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const x of set[j]) {
        for (const y of set[i - j - 1]) {
          set[i].add(x + y);
          set[i].add(x - y);
          set[i].add(x * y);
          set[i].add(x / y);
        }
      }
    }
    if (set[i].has(number)) return i + 1;
  }
  return -1;
}
console.log(solution(5, 12));
