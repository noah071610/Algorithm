function solution(m, musicinfos) {
  let answer = [];
  let convertor = [
    ["A#", "a"],
    ["C#", "c"],
    ["D#", "d"],
    ["E#", "e"],
    ["F#", "f"],
    ["G#", "g"],
  ];
  musicinfos.forEach((v) => {
    let [start, end, name, infos] = v.split(",");
    const x = start.split(":").reduce((a, b) => a * 60 + b * 1);
    const y = end.split(":").reduce((a, b) => a * 60 + b * 1);
    for (let i = 0; i < convertor.length; i++) {
      let regex = new RegExp(convertor[i][0], "g");
      infos = infos.replace(regex, convertor[i][1]);
      m = m.replace(regex, convertor[i][1]);
    }
    const music_long = y - x;
    if (infos.length < music_long) {
      let info_len = infos.length;
      for (let i = 0; i < music_long - info_len; i++) {
        infos += infos[i];
      }
    } else if (infos.length > music_long) {
      infos = infos.slice(0, music_long);
    }
    if (infos.includes(m)) {
      answer.push({ name, time: music_long });
    }
  });
  if (!answer.length) {
    return "(None)";
  } else {
    return answer.sort((a, b) => b.time - a.time)[0].name;
  }
}

const m = "CC#BCC#BCC#BCC#B";
const musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];

console.log(solution(m, musicinfos));
