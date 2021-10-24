const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let pivot = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[pivot] > arr[j]) pivot = j;
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
  }
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let naljiBreak = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        naljiBreak = false;
      }
    }
    if (naljiBreak) break;
  }
  return arr;
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let pivot = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > pivot) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = pivot;
  }
  return arr;
};

console.log(selectionSort([3, 2, 5, 1, 8, 9, 22, 4]));
console.log(bubbleSort([3, 2, 5, 1, 8, 9, 22, 4]));
console.log(insertionSort([3, 2, 5, 1, 8, 9, 22, 4]));
