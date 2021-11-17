const solution = (lines) => {
  let answer = 0;
  const arr = [];
  const logPointArr = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(" ");
    const end =
      Number(line[1].substring(0, 2)) * 3600 +
      Number(line[1].substring(3, 5)) * 60 +
      Number(line[1].substring(6, 12));
    const duration = Number(line[2].substring(0, line[2].length - 1));
    const start = end - duration + 0.001;
    arr.push([start, end]);
    logPointArr.push(start, end);
  }

  logPointArr.sort();

  for (let i = 0; i < logPointArr.length; i++) {
    let cnt = 0;
    const beginRange = logPointArr[i];
    const endRange = logPointArr[i] + 1;
    for (let j = 0; j < arr.length; j++) {
      const start = arr[j][0];
      const end = arr[j][1];
      if (
        (start >= beginRange && start < endRange) ||
        (end >= beginRange && end < endRange) ||
        (start <= beginRange && end >= endRange)
      ) {
        cnt++;
      }
    }

    if (cnt > answer) {
      answer = cnt;
    }
  }
  return answer;
};
