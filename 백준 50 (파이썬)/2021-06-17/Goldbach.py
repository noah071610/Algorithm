# 1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.

# 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
# 예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.

# 이 추측은 아직도 해결되지 않은 문제이다.

# 백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.

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

naljiBreak = True

while True :
  number = int(stdin.readline().rstrip())
  if number == 0 or number % 2 == 1 :
    break
  for f in range(3,int(number/2)+1) :
    if(isPrime(f)) :
      n = number - f
      if(isPrime(n)) :
        print(f"{number} = {f} + {n}")
        naljiBreak = False
        break
  if naljiBreak :
    print("Goldbach's conjecture is wrong.")

