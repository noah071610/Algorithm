let s = "acbab";

let longest = "";
let current = "";

for (let i = 0; i < s.length; i++) {
  console.log("#1 ", current);
  current = current.substring(current.indexOf(s[i]) + 1);
  console.log("#2 ", current);
  current += s[i];
  console.log("#3 ", current);
  if (current.length > longest.length) {
    longest = current;
  }
  console.log("");
}
console.log(longest);
