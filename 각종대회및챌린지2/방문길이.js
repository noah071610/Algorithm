function solution(dirs) {
  var answer = 0;
  let coordi = [0, 0];
  let past_root = [];
  function findRoot(temp) {
    if (!past_root.includes(temp + coordi.join(""))) {
      past_root.push(temp + coordi.join(""));
      past_root.push(coordi.join("") + temp);
      answer++;
    }
  }
  for (let i = 0; i < dirs.length; i++) {
    switch (dirs[i]) {
      case "U":
        if (coordi[1] !== 5) {
          let temp = coordi.join("");
          coordi[1] = coordi[1] + 1;
          findRoot(temp);
        }
        break;
      case "R":
        if (coordi[0] !== 5) {
          let temp = coordi.join("");
          coordi[0] = coordi[0] + 1;
          findRoot(temp);
        }
        break;
      case "D":
        if (coordi[1] !== -5) {
          let temp = coordi.join("");
          coordi[1] = coordi[1] - 1;
          findRoot(temp);
        }
        break;
      case "L":
        if (coordi[0] !== -5) {
          let temp = coordi.join("");
          coordi[0] = coordi[0] - 1;
          findRoot(temp);
        }
        break;
    }
  }
  return answer;
}

const dirs = "UUUDDDDDUU";

console.log(solution(dirs));
