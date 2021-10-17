function minWindow(s, t) {
  let answer = "";
  let hash = {};
  t.split("").forEach((v) => (hash[v] = (hash[v] || 0) + 1));
  let cnt = Object.keys(hash).length;
  let [left, right] = [0, -1];
  while (right < s.length) {
    if (cnt === 0) {
      if (!answer || right - left + 1 < answer.length) {
        answer = s.slice(left, right + 1);
      }
      if (hash[s[left]] !== undefined) hash[s[left]]++;
      if (hash[s[left]] > 0) cnt++;
      left++;
    } else {
      right++;
      if (hash[s[right]] !== undefined) hash[s[right]]--;
      if (hash[s[right]] === 0) cnt--;
    }
  }
  return answer;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
