// https://programmers.co.kr/learn/courses/30/lessons/72412

// 구현은 정말 쉬우나 효율성 맞추기가 굉장히 어려웠던 문제ㅠㅠ
// 해시맵 그리고 이진탐색을 잘 익혀야한다.
// 이진탐색이 시간복잡도가 좋으니 함수를 암기하자
// 순열과 조합에 응용도 잘 구현해야지 성장할 수 있다.

function solution(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    let key = infos.join("");
    let value = map[key];
    if (value) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos];
      combiArr[i] = "-";
      combination(combiArr, score, map, i + 1);
    }
  }

  function binarySearch(map2, key2, score2) {
    let scoreArr = map2[key2];
    if (scoreArr) {
      var start = 0;
      var end = scoreArr.length;
      while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (scoreArr[mid] >= score2) {
          end = mid;
        } else if (scoreArr[mid] < score2) {
          start = mid + 1;
        }
      }
      return scoreArr.length - start;
    } else return 0;
  }

  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(" ");
    let score = infos.pop();
    combination(infos, score, map, 0);
  }
  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }
  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, "").split(" ");
    let score = Number(querys.pop());
    answer.push(binarySearch(map, querys.join(""), score));
  }

  return answer;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
console.log(solution(info, query));
