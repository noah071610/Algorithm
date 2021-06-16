# 네 자연수 A, B, C, D가 주어진다. 이때, A와 B를 붙인 수와 C와 D를 붙인 수의 합을 구하는 프로그램을 작성하시오.

# 두 수 A와 B를 합치는 것은 A의 뒤에 B를 붙이는 것을 의미한다. 즉, 20과 30을 붙이면 2030이 된다.

from sys import stdin
from functools import reduce

input = stdin.readline().rstrip().split()
stack = []
number = ""

for i in range(len(input)) :
  if i % 2 == 1 :
    number += input[i]
    stack.append(number)
    number = ""
  else :
    number += input[i]

print(reduce(lambda x, y: x + y, map(int,stack)))

# 후기 : reduce함수도 js랑 똑같다 조금 복잡할뿐..
# 구지 네 자연수가 아니더라도 배열이 짝수면 활용 가능하다.