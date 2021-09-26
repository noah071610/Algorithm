let input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.split(/\n/g);

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ")":
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
        break;
      default:
        stack.push(s[i]);
        break;
    }
    console.log(stack);
  }
  return stack.length === 0 ? true : false;
};

console.log(isValid("(){}[]"));
