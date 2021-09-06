// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = [];
  let arr2 = [];
  for (let i = 1; i < str1.length; i++) {
    if ((str1[i - 1] + str1[i]).replace(/[^a-z]/g, "").length === 2) {
      arr1.push(str1[i - 1] + str1[i]);
    }
  }
  for (let i = 1; i < str2.length; i++) {
    if ((str2[i - 1] + str2[i]).replace(/[^a-z]/g, "").length === 2) {
      arr2.push(str2[i - 1] + str2[i]);
    }
  }
  let temp = arr2;
  let intersection = arr1.filter((x) => {
    if (temp.includes(x)) {
      temp.splice(temp.indexOf(x), 1);
      return true;
    }
  });
  let union = [...arr1, ...arr2];
  if (intersection.length === 0 && union.length === 0) {
    return 65536;
  } else {
    return parseInt((intersection.length / union.length) * 65536);
  }
}

const str1 = "aa1+1aa2";
const str2 = "AAAA12";

console.log(solution(str1, str2));
