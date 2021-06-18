# 골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
# 짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.

from sys import stdin
from math import sqrt

def isPrime (num) :
  if num != 1 : 
    for f in range(2, int(sqrt(float(num)))+1) :
      if num%f ==0 :
        return False
  else :
    return False
  return True
  
N = int(stdin.readline().rstrip())

for _ in range(N) :
  number = int(stdin.readline().rstrip())
  cnt = 0
  if number == 0 or number % 2 == 1 :
    break
  for f in range(3,int(number/2)+1) :
    if(isPrime(f)) :
      n = number - f
      if(isPrime(n)) :
        cnt += 1
  print(cnt)
