var numUniqueEmails = function (emails) {
  let answer = [];
  emails.forEach((v) => {
    const [local, domain] = v.split("@");
    answer.push(local.replace(/\./g, "").split("+")[0] + "@" + domain);
  });
  console.log(answer);
  return [...new Set(answer)].length;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
