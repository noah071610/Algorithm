var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  let answer = [];
  let phoneLatters = [
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
  function dfs(index, latter) {
    if (index === digits.length) return answer.push(latter);
    for (let i = 0; i < phoneLatters[Number(digits[index]) - 1].length; i++) {
      dfs(index + 1, latter + phoneLatters[Number(digits[index]) - 1][i]);
    }
  }
  dfs(0, "");
  return answer;
};

console.log(letterCombinations("4"));
