function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, cur) => {
        obj[cur[1]] = obj[cur[1]] ? obj[cur[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

let case1 = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
let case2 = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

console.log(solution(case1));
console.log(solution(case2));
