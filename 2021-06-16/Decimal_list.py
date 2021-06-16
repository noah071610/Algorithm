from sys import stdin
from math import sqrt

N,M = list(map(int,stdin.readline().split()))

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

for i in range(N,M+1) :
  if isPrime(i) :
    print(i)

