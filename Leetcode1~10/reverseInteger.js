var reverse = function (x) {
  return x.toString()[0] === "-"
    ? -parseInt(x.toString().split("").reverse().join(""))
    : parseInt(x.toString().split("").reverse().join(""));
};
