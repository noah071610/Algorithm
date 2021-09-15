let input = "12 25";

const day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const [x, y] = input.split(" ").map((v) => +v);

let now_day = "";
let a = 0;

while (true) {
  if (a !== x - 1) {
    let temp = day[month[a] % 7];
    while (true) {
      if (day[0] !== temp) {
        day.push(day.shift());
      } else {
        a++;
        break;
      }
    }
  } else {
    console.log(day[(y - 1) % 7]);
    break;
  }
}
