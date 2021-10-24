var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let answer = [];
  let phoneLatters = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  function dfs(cnt, str) {
    if (cnt === digits.length) return answer.push(str);
    for (let i = 0; i < phoneLatters[Number(digits[cnt])].length; i++) {
      dfs(cnt + 1, str + phoneLatters[Number(digits[cnt])][i]);
    }
  }
  dfs(0, "");
  return answer;
};

console.log(letterCombinations("23"));
