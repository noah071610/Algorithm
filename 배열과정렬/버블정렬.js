function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let naljiBreak = true;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        naljiBreak = false;
      }
    }
    if (naljiBreak) break;
  }
  return array;
}
console.log(bubbleSort([2, 1, 3, 5, 4]));
