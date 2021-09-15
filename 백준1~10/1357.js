let input = "123 100";

const [x, y] = input.split(" ").map((v) => v.split(""));

console.log(
  Number(
    (Number(x.reverse().join("")) + Number(y.reverse().join("")))
      .toString()
      .split("")
      .reverse()
      .join("")
  )
);
