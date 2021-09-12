function solution(skill, skill_trees) {
  var answer = 0;
  skill = skill.split("");
  skill_trees.forEach((v) => {
    let first_skill = 0;
    let naljiBreak = true;
    for (let i = 0; i < v.length; i++) {
      if (skill.includes(v[i]) && naljiBreak) {
        let target_skill = skill.indexOf(v[i]);
        if (first_skill === target_skill) {
          first_skill++;
        } else {
          naljiBreak = false;
        }
      }
    }
    if (naljiBreak) {
      answer++;
    }
  });
  return answer;
}

const skill = "CBD";

const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));
