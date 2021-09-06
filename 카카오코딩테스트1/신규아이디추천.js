// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  while (id.length < 3) {
    id += id.slice(-1);
  }
  return id;
}

console.log(solution("abcdefghijklmn.p"));
