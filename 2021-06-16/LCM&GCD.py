from sys import stdin
from math import gcd,lcm

N,M = list(map(int,stdin.readline().split()))

def GCD(x,y) :
  while(y) :
    x,y = y , x % y
    # 유클리드 호제법
  return x

def LCM(x,y) :
  return x * y // GCD(x,y)
  # 몫 연산자, 마치 영화상영시간(분) / 60 처럼 소수점 버리는것

print(GCD(N,M))
print(LCM(N,M))

# 후기 : 유클리드호제법을 알아서 좋았지만 걍 내장함수 쓰는게 더 나아보인다.