# 후위 표기식과 각 피연산자에 대응하는 값들이 주어져 있을 때, 그 식을 계산하는 프로그램을 작성하시오.

# 입력

# 첫째 줄에 피연산자의 개수(1 ≤ N ≤ 26) 가 주어진다. 그리고 둘째 줄에는 후위 표기식이 주어진다. (여기서 피연산자는 A~Z의 영대문자이며, A부터 순서대로 N개의 영대문자만이 사용되며, 길이는 100을 넘지 않는다) 그리고 셋째 줄부터 N+2번째 줄까지는 각 피연산자에 대응하는 값이 주어진다. (3번째 줄에는 A에 해당하는 값, 4번째 줄에는 B에 해당하는값 , 5번째 줄에는 C ...이 주어진다, 그리고 피연산자에 대응 하는 값은 정수이다)

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