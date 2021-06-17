# 양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.

import sys
from itertools import combinations
input = sys.stdin.readline
# 새로운 sys.stdin 사용법 ㅎㅎ

def gcd(a, b):
    return gcd(b, a % b) if b else a
    # 유클리제호제법을 좀더 간편하게 재귀함수로 사용 가능하다.
    # 사실 math 모듈을 사용하면 끝난다.

t = int(input())

for i in range(t):
    num_list = list(map(int, input().split()))
    num_list = num_list[1:]
    ans = 0
    for a, b in combinations(num_list, 2):
        ans += gcd(a, b)
    print(ans)

# 후기 : itertools 모듈 사용법을 익히자.