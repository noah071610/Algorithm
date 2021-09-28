var groupAnagrams = function (strs) {
  let hash = {};
  strs.forEach((v) => {
    let temp = v
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join("");
    hash[temp] = hash[temp] ? [...hash[temp], v] : [v];
  });
  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
