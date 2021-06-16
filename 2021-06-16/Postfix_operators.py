from sys import stdin

N = int(stdin.readline())
str = stdin.readline()

nums=[0]*N
for i in range(N):
    nums[i]=int(stdin.readline())

stack=[]

for ch in str:
    #문자이면
    if ch.isupper():
        #nums[해당 문자의 아스키코드에 해당하는 index]
        stack.append(nums[ord(ch)-ord('A')])
        # ord('A') 는 97이다. 외워도된다.
    #연산자이면
    else:
        #뒤에 추가된 숫자먼저 빼오고
        #이전에 추가된 숫자빼오기
        num2=stack.pop()
        num1=stack.pop()
        if ch=='+':
            stack.append(num1+num2)
        elif ch=='-':
            stack.append(num1-num2)
        elif ch=='/':
            stack.append(num1/num2)
        elif ch=='*':
            stack.append(num1*num2)
    print(f"stack : {stack}")

# 후기 : 전위 후위 연산자는 무조건 깔끔하게 알고가자.