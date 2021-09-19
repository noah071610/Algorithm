# 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

from sys import stdin

input = stdin.readline().strip()

result = [0] * 26
# [0 for _ in range(26)]

for cha in input:
  result[ord(cha) - 97] += 1
# 아스키코드에 알파벳 A~Z 는 97부터 시작한다

print(" ".join(map(str, result)))

# 후기 : 쉽다, 아스키코드를 잘 활용하도록 하자.
