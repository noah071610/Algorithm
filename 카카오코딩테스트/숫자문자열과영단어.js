function solution(s) {
  let answer = "";
  let word = "";
  const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() < 58) {
      answer += s[i];
    } else {
      word += s[i];
      if (eng.find((v) => v === word) && word.length > 2) {
        answer += eng.findIndex((v) => v === word);
        word = "";
      }
    }
  }
  return parseInt(answer);
}

function solution2(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
    console.log(arr, answer);
  }

  return Number(answer);
}

console.log(solution2("one4seveneight"));
