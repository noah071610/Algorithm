function solution(s) {
  let answer = [];
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const arr = [];
    let a = 0;
    let b = i;
    while (a < s.length) {
      arr.push(s.slice(a, b));
      a += i;
      b += i;
    }
    let data_word = "";
    let num = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j + 1]) {
        num++;
      } else {
        data_word += num === 1 ? arr[j] : num + arr[j];
        temp_word = "";
        num = 1;
      }
    }
    answer.push(data_word.length);
  }
  return answer.length > 0 ? Math.min(...answer) : 1;
}

console.log(solution("x"));
