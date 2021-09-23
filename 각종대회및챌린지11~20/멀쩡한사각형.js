function solution(w, h) {
  function gcd(x, y) {
    return x % y === 0 ? y : gcd(y, x % y);
  }
  return w * h - (w + h - gcd(w, h));
}

console.log(solution(8, 12));
