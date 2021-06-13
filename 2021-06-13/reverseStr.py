#문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

n = int(input())
for _ in range(n):
    arr = input().split()
    for i in arr:
      #문자열 뒤집기
      print(i[::-1], end=" ")
    print()

# 짧은 후기 : input 말고 sys 
