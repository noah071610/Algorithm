function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  let pivot = array[Math.floor((left + right) / 2)];

  let partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) left++;
      while (array[right] > pivot) right--;
      if (left <= right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }
    return left;
  }

  return array;
}

console.log(quickSort([5, 7, 2, 4, 1, 10]));
