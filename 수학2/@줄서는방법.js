function targetPermutation(n, k) {
  var answer = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let fac = arr.reduce((acc, val) => acc * val, 1);
  k--;
  while (answer.length !== n) {
    fac = fac / arr.length;
    let temp = arr[Math.floor(k / fac)];
    answer.push(temp);
    k = k % fac;
    arr = arr.filter((e) => e !== temp);
  }
  return answer;
}

var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i);
      swap(i, large);
      reverse(i + 1);
      return;
    }
  }

  nums.reverse();

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  function reverse(idx) {
    let start = idx;
    let end = nums.length - 1;
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }
  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i;
    }
  }
};

console.log(targetPermutation(4, 15));
