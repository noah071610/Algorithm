function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
      console.log(array);
    }
    if (!swap) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));
