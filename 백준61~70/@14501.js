let input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.split(/\n/g);

let dDay = Number(input.shift());
let schedule = input.map((v) => v.split(" ").map((k) => Number(k)));
let dp = [0];

const getPay = (n) => {
  if (n >= dDay) {
    return 0;
  }
  const [t, p] = schedule[n];
  dp[n] = Math.max(getPay(n + 1), n + t - 1 < dDay ? p + getPay(n + t) : getPay(n + t));
  return dp[n];
};
console.log(getPay(0));
