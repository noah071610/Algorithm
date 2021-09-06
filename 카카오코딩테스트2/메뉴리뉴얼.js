function solution(orders, course) {
  var answer = [];
  function getCombination(array, selectedNum) {
    let result = [];
    if (selectedNum === 1) return array.map((v) => [v]);

    array.forEach((v, i, origin) => {
      const rest = origin.slice(i + 1);
      const comb = getCombination(rest, selectedNum - 1);
      const attached = comb.map((t) => [v, ...t]);
      result.push(...attached);
    });
    return result;
  }

  course.forEach((v) => {
    let x = [];
    orders.forEach((t) => {
      x.push(...getCombination(t.split(""), v).map((k) => k.sort().join("")));
    });
    const a = x.reduce((acc, cur, origin) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});
    let max = 2;
    let cnt = 1;
    let top_menu = [];
    Object.keys(a).forEach((key) => {
      if (a[key] > max) {
        max = a[key];
        top_menu = [];
        top_menu.push(key);
      } else if (a[key] === max) {
        top_menu.push(key);
      }
    });
    answer.push(...top_menu);
  });
  return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

console.log(solution(orders, course));
