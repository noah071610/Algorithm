var merge = function (intervals) {
  let answer = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      answer.push(previous);
      previous = intervals[i];
    }
  }
  answer.push(previous);
  return answer;
};

const intervals = [
  [1, 3],
  [2, 6],
  [7, 10],
  [15, 18],
];

console.log(merge(intervals));
