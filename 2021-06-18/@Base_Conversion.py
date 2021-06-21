# 문제
# 타임머신을 개발하는 정이는 오랜 노력 끝에 타임머신을 개발하는데 성공하였다. 미래가 궁금한 정이는 자신이 개발한 타임머신을 이용하여 500년 후의 세계로 여행을 떠나게 되었다. 500년 후의 세계에서도 프로그래밍을 하고 싶었던 정이는 백준 사이트에 접속하여 문제를 풀기로 하였다. 그러나 미래세계는 A진법을 사용하고 있었고, B진법을 사용하던 정이는 문제를 풀 수가 없었다. 뛰어난 프로그래머였던 정이는 A진법으로 나타낸 숫자를 B진법으로 변환시켜주는 프로그램을 작성하기로 하였다. 

# N진법이란, 한 자리에서 숫자를 표현할 때 쓸 수 있는 숫자의 가짓수가 N이라는 뜻이다. 예를 들어 N은 17일 때 한 자릿수에서 사용할 수 있는 수는 0, 1, 2, ... , 16으로 총 17가지가 된다.

# 입력
# 입력의 첫 줄에는 미래세계에서 사용하는 진법 A와 정이가 사용하는 진법 B가 공백을 구분으로 주어진다. A와 B는 모두 2이상 30이하의 자연수다.

# 입력의 두 번째 줄에는 A진법으로 나타낸 숫자의 자리수의 개수 m(1 ≤ m ≤ 25)이 주어진다. 세 번째 줄에는 A진법을 이루고 있는 숫자 m개가 공백을 구분으로 높은 자릿수부터 차례대로 주어진다. 각 숫자는 0이상 A미만임이 보장된다. 또한 수가 0으로 시작하는 경우는 존재하지 않는다.

# A진법으로 나타낸 수를 10진법으로 변환하였을 때의 값은 양의 정수이며 220보다 작다.

"""from sys import stdin

system = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

A,B = map(int,stdin.readline().split())
m = int(stdin.readline())
N = stdin.readline().split()

res = 0
for i,c in enumerate(N[::-1]) :
  target = int(c) if c.isdigit() else ord(c) - 55 
  res += (target * (A**i)) 

answer = []
while res > 0 :
  answer.insert(0,system[res%B])
  res //= B

print(" ".join(answer))"""

# 시간초과.. 뭐가 문제지????


x, y = map(int, input().split())
z = int(input())
a = list(map(int, input().split()))
ten = 0
answer =[]
for i in range(z):
    ten += a.pop(-1) * (x**i)
while ten !=0:
    answer.append(str(ten % y))
    ten = ten // y

print(' '.join(answer[::-1]))