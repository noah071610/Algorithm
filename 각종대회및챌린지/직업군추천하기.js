function solution(table, languages, preference) {
  var answer = [];
  let max_score = 0;
  table.forEach((v) => {
    v = v.split(" ");
    let total_score = 0;
    let job_langs = v.slice(1).map((v, i, origin) => [v, Math.abs(i - origin.length)]);
    languages.forEach((k, j) => {
      if (job_langs.map((v) => v[0]).includes(k)) {
        total_score += preference[j] * job_langs.find((v) => v[0] === k)[1];
      }
    });
    console.log(total_score);
    max_score = Math.max(max_score, total_score);
    answer.push([...v.slice(0, 1), total_score]);
  });
  return answer
    .sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt())
    .find((v) => v[1] === max_score)[0];
}
// b[1] - a[1] - (a[0] < b[0])
const table = [
  "SI JAVA JAVASCRIPT SQL PYTHON C#",
  "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
  "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
  "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
  "GAME C++ C# JAVASCRIPT C JAVA",
];

const languages = ["JAVA", "JAVASCRIPT"];

const preference = [7, 5];

console.log(solution(table, languages, preference));
