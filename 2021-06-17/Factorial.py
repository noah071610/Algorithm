# 말그대로 N! 의 팩토리얼을 만드는 알고리즘이다.

from sys import stdin
from math import factorial

N = int(stdin.readline().rstrip())
print("1") if N == 0 else print(factorial(N))

# 내장함수의 힘을 빌리지말구 재귀함수도 한번 써보자

def factorial_rcs(n) :
  return n * factorial_rcs(n-1) if n > 1 else 1

print(factorial_rcs(N))

# 후기 : 더 좋은 효율을 생각해 생각을 말랑말랑하게 하자.