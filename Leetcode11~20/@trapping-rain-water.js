var trap = function (height) {
  let water = 0;
  let [left, right] = [0, height.length - 1];
  let [maxLeft, maxRight] = [height[left], height[right]];

  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);
    if (maxLeft <= maxRight) {
      water += maxLeft - height[left];
      left++;
    } else {
      water += maxRight - height[right];
      right--;
    }
  }

  return water;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));
