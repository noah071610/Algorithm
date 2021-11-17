function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => b - a);
  console.log(people);
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    console.log(i, j);
    if (people[i] + people[j] <= limit) j--;
    answer++;
  }
  return answer;
}
const people = [50, 50, 40, 70, 60, 40, 30, 30];
const limit = 80;

console.log(solution(people, limit));
