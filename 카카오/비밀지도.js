// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  function binary_generator(num) {
    let temp = num;
    let binary = "";
    while (temp > 0) {
      binary = (temp % 2) + binary;
      temp = parseInt(temp / 2);
    }
    while (binary.length < n) {
      binary = 0 + binary;
    }
    return binary;
  }
  let hidden_map = [];
  for (let i = 0; i < n; i++) {
    let x = binary_generator(arr1[i]);
    let y = binary_generator(arr2[i]);
    let row = "";
    for (let j = 0; j < n; j++) {
      if (x[j] === "1" || y[j] === "1") {
        row += "#";
      } else {
        row += " ";
      }
    }
    hidden_map.push(row);
  }
  return hidden_map;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
