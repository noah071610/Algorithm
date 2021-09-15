function solution(files) {
  let index_arr = [];
  for (let i = 0; i < files.length; i++) {
    let temp = [];
    let head_break = false;
    for (let j = 0; j < files[i].length; j++) {
      if (!head_break && (parseInt(files[i][j]) || parseInt(files[i][j]) === 0)) {
        temp.push(j);
        head_break = true;
      }
      if (files[i][j] === ".") {
        temp.push(j);
        break;
      }
      if (head_break && (files[i][j].match(/[a-zA-z\s]/g) || j - temp[0] > 4)) {
        temp.push(j);
        break;
      }
    }
    index_arr.push(temp);
  }
  return files
    .map((v, i) => [v, i])
    .sort((a, b) => {
      const a_header = a[0].slice(0, index_arr[a[1]][0]).toUpperCase();
      const b_header = b[0].slice(0, index_arr[b[1]][0]).toUpperCase();
      if (a_header === b_header) {
        return (
          parseInt(a[0].slice(index_arr[a[1]][0], index_arr[a[1]][1])) -
          parseInt(b[0].slice(index_arr[b[1]][0], index_arr[b[1]][1]))
        );
      } else {
        if (a_header > b_header) return 1;
        if (a_header < b_header) return -1;
      }
    })
    .map((v) => v[0]);
}

const files = [
  "FS-5 Freedom Fighter",
  "FS.6 Thunderbolt II",
  "F-14 Tomcat",
  "AFB-503333wWSup erfortress",
];

console.log(solution(files));
