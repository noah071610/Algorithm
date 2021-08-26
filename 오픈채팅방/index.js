// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");
    if (state !== "Change") {
      action.push([state, id]);
    }
    if (nick) {
      userInfo[id] = nick;
    }
  });
  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Change uid4567 Ryan",
  "Change uid4567 d",
  "Leave uid1234",
  "Enter uid1234 Prodo",
];
console.log(solution(record));
