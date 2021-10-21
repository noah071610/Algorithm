var isPalindrome = function (s) {
  function checkPalindrome(l, r) {
    let i = 0;
    while (s[l - i] && s[l - i] === s[r + i]) {
      i++;
    }
    i--;
    return s.slice(l - i, r + i + 1) === s ? true : false;
  }
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(s);
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return checkPalindrome(mid - 1, mid);
  } else {
    return checkPalindrome(mid, mid);
  }
};

console.log(isPalindrome("afwfwdfsd"));
