from sys import stdin
from math import factorial

n,m = map(int,stdin.readline().split())
"""per = 1

def calc_zero (n) :
  cnt = 0
  while n % 10 == 0 :
    n /= 10
    cnt+= 1
  return cnt

for f in range(N-M+1,N+1) :
  per *= f

print(per//factorial(M))"""

# ❗❗❗❗
# 시간초과됨 하기야 팩토리얼수열이 10000 넘어간다? 5252컴퓨터.. 이거 감당 가능하겠냐구..;;

# 팩토리얼값의 0의 개수 찾기

# M!가 가지고 있는 2의 개수 - N!이 가지고 있는 2의 개수 - (M-N)!이 가지고 있는 2의 개수

# M!가 가지고 있는 5의 개수 - N!이 가지고 있는 5의 개수 - (M-N)!이 가지고 있는 5의 개수

# 이중에 최솟값을 구한다 왜냐? 2 와 5 의 곲한값이 10 이다.
# 2 * 2 * 5 는 20이다 즉 0이 하나다
# 하지만 여기에 2 * 2 * 5 * 5 가 되면 드디어 100이 되고 0의 값은 2개가 된다. 
# ❗❗❗❗

def two_count(n):
    two = 0
    while n != 0:
        n = n // 2
        two += n
    return two

# 8! = 8 7 6 5 4 3 2 1 => 2가 나오는 횟수 7번이다
# 왜냐
# 8 = 2x2x2
# 6 = 2x3
# 4 = 2x2
# 2 = 2x1
# 으로 2가 7번나온다.
# 제곱수인 4는 2가 2번
# 3제곱수인 8은 2가 3번 나오는 것을 알 수있다.

# 여기서 알수있는것이 먼저 8 7 6 5 4 2 1에서 2의 배수의 갯수를 구한다. 8/2 = 4
# 다음으로 제곱수에 대해서 배수를 구한다. 8/(2*2) = 2
# 다음으로 세제곱수에 대해서 배수를 구한다. 8/(2*2*2) = 1
# 즉 4 + 2 + 1이란 것이다.

def five_count(n):
    five = 0
    while n != 0:
        n = n // 5
        five += n
    return five

print(min(two_count(n) - two_count(n - m) - two_count(m), five_count(n) - five_count(n - m) - five_count(m)))

# 후기 : 살려줘