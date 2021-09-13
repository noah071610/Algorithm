function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return money >= 0 ? 0 : Math.abs(money);
}

const price = 1;
const money = 20;
const count = 4;

console.log(solution(price, money, count));
