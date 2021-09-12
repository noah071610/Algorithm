from sys import stdin

str = stdin.readline()
stack = []
res = ""

for chr in str :
  if chr.isupper() :
    res += chr
  else :
    if chr == '(':
      stack.append(chr)
    elif chr == '*' or chr =='/':
      while stack and (stack[-1]=='*' or stack[-1]=='/'):
        res+=stack.pop() # * 나 / 가 있으면
      stack.append(chr)
    elif chr == '+' or chr == '-':
      while stack and stack[-1] != '(':
        res += stack.pop() #괄호가 닫힐때까지 
      stack.append(chr)
    elif chr == ')':
      while stack and stack[-1] != '(':
          res+=stack.pop() #괄호가 닫힐때까지 
      stack.pop()
  

while stack:
    res += stack.pop()
print(res)