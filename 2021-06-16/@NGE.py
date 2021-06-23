# 크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다. Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한 수가 없는 경우에 오큰수는 -1이다.

# 예를 들어, A = [3, 5, 2, 7]인 경우 NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다. A = [9, 5, 4, 8]인 경우에는 NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.

import sys

# N = int(sys.stdin.readline())
# arr = list(map(int,sys.stdin.readline().split()))
# answer = []

# for i in range(N) :
#   max = -1
#   for j in range(i,N) :
#     if arr[i] < arr[j] : 
#       max = arr[j]
#       break
#   answer.append(str(max))
# print(" ".join(answer))

# ❗❗❗❗
# 시간복잡도 O(^n) 으로 하면 시간초과가 발생한다.. 으악 ㅠ

N = int(sys.stdin.readline())
input = list(map(int,sys.stdin.readline().split()))
stack = [] # index값을 저장할 스택
result = [-1 for _ in range(N)] # 인풋의 길이만큼 -1 배열을 만든다

stack.append(0) #초기값 설정
i = 1 

while stack and i < N: 
  while stack and input[stack[-1]] < input[i]: 
    result[stack[-1]] = input[i] 
    stack.pop() 
    # input[i] 가 스택 끝값보다 크냐? 그럼 result에 넣어
    # 스택 니 이전 값들도 비교할꺼야 스택 끝값은 팝으로 빼.
    # 다 비교해서 stack값이 없다고? 그럼 루프 빠져나가는거지
  stack.append(i)
  i += 1

# ❗❗❗❗
# print(" ".join(list(map(str,result)))) 시간 많이 잡아먹음

for i in result :
  print(i,end=" ")

# 후기 : 시간복잡도를 정말 정확하게 이해해야지 알고리즘 실력이 향상된다.