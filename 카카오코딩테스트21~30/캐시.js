function solution(cacheSize, cities) {
  var answer = 0;
  let stack = [];
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  cities = cities.map((v) => v.toUpperCase());
  for (let i = 0; i < cities.length; i++) {
    let target_index = stack.findIndex((v) => v === cities[i]);
    if (target_index !== -1) {
      stack.unshift(stack.splice(target_index, 1)[0]);
      answer++;
    } else {
      if (stack.length === cacheSize) {
        stack.pop();
      }
      stack.unshift(cities[i]);
      answer += 5;
    }
    console.log(stack);
  }
  return answer;
}

const cacheSize = 5;

const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];

console.log(solution(cacheSize, cities));
