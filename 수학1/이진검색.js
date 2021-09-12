function binarySearch(arr, n) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (n <= arr[mid]) {
      end = mid;
    } else if (arr[mid] < n) {
      start = mid + 1;
    }
  }
}
const arr = [3, 5, 2, 1, 8, 10, 22, 9, 110, 50, 4];
const n = 50;

console.log(binarySearch(arr, n));
