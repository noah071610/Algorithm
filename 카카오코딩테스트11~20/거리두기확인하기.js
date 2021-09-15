function solution(places) {
  var answer = [];
  places.forEach((v) => {
    let naljiBreak = false;
    for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < v[i].length; j++) {
        if (v[i][j] === "P" && !naljiBreak) {
          if (v[i][j + 1] === "P" || v[i][j - 1] === "P") {
            answer.push(0);
            naljiBreak = true;
            break;
          }
          if (v[i][j + 1] === "O") {
            if (
              v[i][j + 2] === "P" ||
              (i !== v.length - 1 && v[i + 1][j + 1] === "P") ||
              (i !== 0 && v[i - 1][j + 1] === "P")
            ) {
              answer.push(0);
              naljiBreak = true;
              break;
            }
          }
          if (v[i][j - 1] === "O") {
            if (
              v[i][j - 2] === "P" ||
              (i !== v.length - 1 && v[i + 1][j - 1] === "P") ||
              (i !== 0 && v[i - 1][j - 1] === "P")
            ) {
              answer.push(0);
              naljiBreak = true;
              break;
            }
          }
          if ((i !== v.length - 1 && v[i + 1][j] === "P") || (i !== 0 && v[i - 1][j] === "P")) {
            answer.push(0);
            naljiBreak = true;
            break;
          }
          if (i < v.length - 2 && v[i + 1][j] === "O") {
            if (v[i + 2][j] === "P") {
              answer.push(0);
              naljiBreak = true;
              break;
            }
          }
          if (i > 1 && v[i - 1][j] === "O") {
            if (v[i - 2][j] === "P") {
              answer.push(0);
              naljiBreak = true;
              break;
            }
          }
        }
      }
    }
    if (!naljiBreak) {
      answer.push(1);
    }
  });
  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log(solution(places));
