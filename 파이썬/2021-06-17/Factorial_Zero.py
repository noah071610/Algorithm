# 팩토리얼값의 0의 갯수 구하기

from math import factorial
from sys import stdin

N = factorial(int(stdin.readline()))
cnt = 0

while N % 10 == 0 :
  N = N // 10
  cnt +=1

print(cnt)


# 후기 : 숫자에서 0이 생기는 이유는 5 * 2 의 경우다.