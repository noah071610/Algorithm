var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let oddPalin = expandAroundCenter(i, i);
    let evenPalin = expandAroundCenter(i - 1, i);
    if (oddPalin.length > longest.length) {
      longest = oddPalin;
    }
    if (evenPalin.length > longest.length) {
      longest = evenPalin;
    }
  }
  return longest;
};

function expandAroundCenter(leftIdx, rightIdx) {
  let i = 0;
  while (s[leftIdx - i] && s[leftIdx - i] === s[rightIdx + i]) {
    i++;
  }
  i--;
  return s.slice(leftIdx - i, rightIdx + i + 1);
}

console.log(longestPalindrome("accait"));
