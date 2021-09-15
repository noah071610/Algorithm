function solution(msg) {
  let index_dic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var answer = [];
  while (msg.length !== 0) {
    let w = msg[0];
    let wc = "";
    if (msg.length === 1) {
      answer.push(index_dic.indexOf(w) + 1);
      break;
    } else {
      for (let i = 1; i < msg.length; i++) {
        wc = w + msg[i];
        console.log(msg, w, wc, index_dic);
        if (index_dic.find((v) => v === wc)) {
          if (i === msg.length - 1) {
            msg = msg.slice(wc.length);
            answer.push(index_dic.indexOf(wc) + 1);
            break;
          } else {
            w = wc;
            continue;
          }
        } else {
          msg = msg.slice(w.length);
          answer.push(index_dic.indexOf(w) + 1);
          index_dic.push(wc);
          break;
        }
      }
    }
  }
  return answer;
}

const msg = "ABABABABABABABAB";

console.log(solution(msg));
