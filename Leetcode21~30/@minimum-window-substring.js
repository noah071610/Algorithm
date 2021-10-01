function minWindow(s, t) {
  let answer = "";

  let map = {};
  t.split("").forEach((ch) => (map[ch] = (map[ch] || 0) + 1));
  let cnt = Object.keys(map).length;

  let l = 0;
  let r = -1;
  while (r < s.length) {
    if (cnt === 0) {
      if (!answer || r - l + 1 < answer.length) {
        answer = s.slice(l, r + 1);
      }
      if (map[s[l]] !== undefined) {
        map[s[l]]++;
      }
      if (map[s[l]] > 0) {
        cnt++;
      }
      l++;
    } else {
      r++;
      if (map[s[r]] !== undefined) {
        map[s[r]]--;
      }
      if (map[s[r]] === 0) {
        cnt--;
      }
    }
  }
  return ans;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
