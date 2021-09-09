function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) {
      console.log(`#### ${n} , ${i} 판독 #######`);
      return false;
    }
  }
  return true;
}

function eratosthenes(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}
const n = 31;
// console.log(isPrime(n));
console.log(eratosthenes(n));
