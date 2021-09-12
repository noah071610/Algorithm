// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  function gcd(x, y) {
    return x % y === 0 ? y : gcd(y, x % y);
  }
  function lcm(x, y) {
    return parseInt((x * y) / gcd(x, y));
  }
  while (arr.length > 1) {
    arr.push(lcm(arr.shift(), arr.shift()));
  }
  return arr.pop();
}

const arr = [1, 2, 3];

console.log(solution(arr));
