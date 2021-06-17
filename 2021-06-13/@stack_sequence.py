# 스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

# 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다. 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.



import sys

n = int(sys.stdin.readline()) # 최적화를 위해 sys 사용
stack = []
stack_cnt = 0
result = []
no_message = True

for _ in range(n) :
  x = int(sys.stdin.readline())
  while(stack_cnt < x) :
    stack_cnt += 1
    stack.append(stack_cnt)
    result.append("+")
  if stack[-1]== x :
    stack.pop()
    result.append("-")
  else:
    #stack_cnt 값과 x의 값이 일치않하면 사실상 스택이 아님 false
    #예 : stack [1,4,5] 에서 4를 먼저빼는건 불가능 x=4 != stack_cnt=5
    no_message = False
    break
if no_message==False:
    print("NO")
else:
    #"\n".join(result) 배열을 요소당 줄바꿈 출력
    print("\n".join(result))

# 짧은 후기 : 알고리즘은 국어공부가 더 필요한듯? 
# 메모리(kb) & 시간(ms) : 31432	156