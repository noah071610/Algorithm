target = int(input())
M = int(input())
numberList = {str(i) for i in range(10)} # 입력 불가능한 번호들을 제거해주기 위해 리스트가 아닌 set로 선언

if M != 0:
    numberList -= set(map(str, input().split())) 

count = abs(100 - target) 

for i in range(1000000):
    for j in range(len(str(i))):
      if str(i)[j] not in numberList: 
          break
      elif j == len(str(i)) - 1:
          count = min(count, abs(i - target) + len(str(i))) 

print(count)

# 너무 어려워서 보류