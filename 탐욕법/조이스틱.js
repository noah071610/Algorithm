function solution(name) {
  var answer = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let reset = Array.from({ length: name.length }, () => "A");
  name = name.split("");
  function findAlphabet(word, index, cnt, isReverse) {
    let temp = [...word];
    cnt += Math.min(
      alphabet.indexOf(name[index]),
      alphabet.split("").reverse().join("").indexOf(name[index]) + 1
    );
    temp[index] = name[index];
    if (temp.toString() === name.toString()) {
      answer.push(cnt);
    } else {
      findAlphabet(temp, index === 0 ? name.length - 1 : index - 1, cnt + 1, true);
      if (!isReverse) {
        findAlphabet(temp, index + 1, cnt + 1, false);
      }
    }
  }
  findAlphabet(reset, 0, 0, false);
  return Math.min(...answer);
}

console.log(solution("JAN"));
