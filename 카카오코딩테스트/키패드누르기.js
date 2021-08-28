// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  var answer = [];
  const position = {
    left: 10,
    right: 12,
  };
  numbers.forEach((v) => {
    if (v === 1 || v === 4 || v === 7) {
      answer.push("L");
      position["left"] = v;
    } else if (v === 3 || v === 6 || v === 9) {
      answer.push("R");
      position["right"] = v;
    } else {
      if (v === 0) {
        v = 11;
      }
      let cnt_x = 0;
      let cnt_y = 0;
      let x = Math.abs(v - position["left"]);
      let y = Math.abs(v - position["right"]);
      while (x > 2) {
        cnt_x++;
        x -= 3;
      }
      while (y > 2) {
        cnt_y++;
        y -= 3;
      }
      x = cnt_x === 0 ? x : cnt_x + x;
      y = cnt_y === 0 ? y : cnt_y + y;
      console.log([position["left"], x], [position["right"], y], v);
      if (x < y) {
        answer.push("L");
        position["left"] = v;
      } else if (x > y) {
        answer.push("R");
        position["right"] = v;
      } else {
        answer.push(hand === "right" ? "R" : "L");
        position[hand] = v;
      }
    }
  });
  return answer.join("");
}

const numbers = [2, 8, 5, 0, 0, 5, 8];
console.log(solution(numbers, "left"));
