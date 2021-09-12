function solution(a, b) {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let now_day = "";
  for (let i = 0; i < month.length; i++) {
    now_day = day[(month[i] - 1) % 7];
    if (i + 1 !== a) {
      while (true) {
        if (now_day === day[0]) {
          day.push(day.shift());
          break;
        } else {
          day.push(day.shift());
        }
      }
    } else {
      return day[(b - 1) % 7];
    }
  }
}

const [a, b] = [1, 31];

console.log(solution(5, 24));
