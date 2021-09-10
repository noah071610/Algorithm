// function solution(currency) {
//   let answer = {};
//   let currency_exp = [
//     ["오만원", 50000],
//     ["만원", 10000],
//     ["오천원", 5000],
//     ["천원", 1000],
//     ["오백원", 500],
//     ["백원", 100],
//     ["오십원", 50],
//     ["십원", 10],
//     ["일원", 1],
//   ];
//   function getCurrency(index, rest) {
//     let cnt = 0;
//     if (index < currency_exp.length) {
//       while (rest >= currency_exp[index][1]) {
//         rest -= currency_exp[index][1];
//         cnt++;
//       }
//       answer[currency_exp[index][0]] = cnt;
//       getCurrency(index + 1, rest);
//     }
//   }
//   getCurrency(0, currency);
//   return answer;
// }

// const currency = 65367;

// console.log(solution(currency));

const units = [
  ["50000", "오만원"],
  ["10000", "만원"],
  ["5000", "오천원"],
  ["1000", "천원"],
  ["500", "오백원"],
  ["100", "백원"],
  ["50", "오십원"],
  ["10", "십원"],
  ["1", "일원"],
];
Object.freeze(units);

function solution(amount) {
  const result = [];
  for (const unit of units) {
    const temp = {};
    temp[unit[1]] = Math.floor(amount / +unit[0]);
    amount %= +unit[0];
    result.push(temp);
  }
  console.log(result);
}

solution(11003);
