# 문자열 N개가 주어진다. 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.

# 각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 이루어져 있다.

from sys import stdin

while True :
  input_str = stdin.readline().rstrip('\n')
  if not input_str:
    break
  arr = [0]*4
  for chr in input_str :
    if chr.isupper() :
      arr[1] += 1
    elif chr.isnumeric() :
      arr[2] += 1
    elif chr == " " :
      arr[3] += 1
    elif chr.isalpha() :
      arr[0] += 1
  print(" ".join(map(str,arr)))


# 후기 : 무한루프와 rstrip('\n') 으로 지속입력 구현
