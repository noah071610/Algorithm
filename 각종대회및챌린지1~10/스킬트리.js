function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((v) => {
    let temp = skill.split("");
    let naljiBreak = false;
    for (let i = 0; i < v.length; i++) {
      let checker = temp.findIndex((k) => k === v[i]);
      if (checker === -1) continue;
      if (checker === 0) {
        temp.shift();
      } else {
        naljiBreak = true;
        break;
      }
    }
    if (!naljiBreak) answer++;
  });
  return answer;
}

const skill = "CBD";

const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));
