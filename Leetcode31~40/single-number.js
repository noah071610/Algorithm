var singleNumber = function (nums) {
  return Object.entries(
    nums.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? 0 : 1;
      return acc;
    }, {})
  ).find((v) => v[1] === 1)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2, 5, 8, 4, 8]));
