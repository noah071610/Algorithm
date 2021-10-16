function solution(n) {
  var battery = 0;
  while (n > 0) {
    console.log(n);
    if (n % 2 !== 0) {
      n = n - 1;
      battery++;
    } else {
      n = n / 2;
    }
  }
  return battery;
}

console.log(solution(7));
