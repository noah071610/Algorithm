from sys import stdin
from math import sqrt

N = int(stdin.readline())
numbers = list(map(int,stdin.readline().split()))
cnt = 0

def isPrime (num) :
  if num != 1 : 
    for f in range(2, int(sqrt(float(num)))+1) :
    # 제곱근을 활용한다. 생각해보면 9에서 9의 루트값인 3이상 탐색해봐야 의미가 없다.
      if num%f ==0 :
        return False
  else :
    # 1은 무조건 소수가 아니다. 아니, 논외다.
    return False
  return True

for i in range(N) :
  if isPrime(numbers[i]) :
    cnt += 1
print(cnt)

# 후기 : sqrt 함수는 내장함수 쓰고 LCM 이랑 GCD 에선 Math 내장함수 안써서 약간 죄책감이든다. 내장함수는 봐주겠지?