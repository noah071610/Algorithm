function solution(scores) {
  let answer = "";
  function getScoreAlphabet(v) {
    if (v >= 90) {
      return "A";
    }
    if (v >= 80 && v < 90) {
      return "B";
    }
    if (v >= 70 && v < 80) {
      return "C";
    }
    if (v >= 50 && v < 70) {
      return "D";
    }
    return "F";
  }
  for (let j = 0; j < scores.length; j++) {
    let max_cnt = 0;
    let min_cnt = 0;
    let total_score = 0;
    let me_score = scores[j][j];
    for (let i = 0; i < scores.length; i++) {
      if (me_score > scores[i][j]) {
        max_cnt++;
      } else if (me_score < scores[i][j]) {
        min_cnt++;
      }
      total_score += scores[i][j];
    }
    if (max_cnt === scores.length - 1 || min_cnt === scores.length - 1) {
      answer += getScoreAlphabet((total_score - me_score) / (scores.length - 1));
    } else {
      answer += getScoreAlphabet(total_score / scores.length);
    }
  }
  return answer;
}

const scores = [
  [70, 49, 90],
  [68, 50, 38],
  [73, 31, 100],
];

console.log(solution(scores));
