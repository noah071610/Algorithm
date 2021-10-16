function solution(begin, target, words) {
  let answer = 0;
  let searched = [];
  let queue = [];
  if (!words.includes(target)) return 0;
  queue.push([begin, answer]);
  while (queue.length) {
    console.log(queue);
    let [word, cnt] = queue.shift();
    if (word === target) return cnt;
    words.forEach((v, i) => {
      let alphabet_cnt = 0;
      if (searched.includes(v)) return;
      for (let j = 0; j < v.length; j++) {
        if (word[j] !== v[j]) alphabet_cnt++;
      }
      if (alphabet_cnt === 1) {
        queue.push([v, cnt + 1]);
        searched.push(v);
      }
    });
  }
  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
