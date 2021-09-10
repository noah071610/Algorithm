// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    queue = [[0, 0]],
    weightOnBridge = 0;

  while (queue.length > 0 || truck_weights.length > 0) {
    console.log(queue, time);
    if (queue[0][1] === time) weightOnBridge -= queue.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      queue.push([truck_weights.shift(), time + bridge_length]);
    } else {
      if (queue[0]) time = queue[0][1] - 1;
    }
    time++;
  }
  return time;
}

const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length, weight, truck_weights));

// function solution(bridge_length, weight, truck_weights) {
//   let answer = 0;
//   let onBridge = [];
//   let sum = 0;
//   while (truck_weights.length) {
//     if (weight <= sum + truck_weights[0]) {
//       answer += bridge_length - onBridge.length;
//       while (true) {
//         answer++;
//         sum -= onBridge.pop();
//         if (weight > sum + truck_weights[0]) {
//           answer--;
//           break;
//         }
//       }
//     } else {
//       sum += truck_weights[0];
//       answer++;
//       onBridge.push(truck_weights.shift());
//     }
//   }
//   if (onBridge.pop() > 0) {
//     answer += bridge_length;
//   }
//   return answer;
// }
