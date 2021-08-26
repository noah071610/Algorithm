// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    const cur = list.shift();
    if (list.some((v) => v.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
