# 문제
# 상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.

# 가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다. 상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. 이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.

# 사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)

# 다음 N개 줄에는 보드에 채워져 있는 사탕의 색상이 주어진다. 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.

# 사탕의 색이 다른 인접한 두 칸이 존재하는 입력만 주어진다.

from sys import stdin
input = lambda : stdin.readline().rstrip()

N = int(input())
arr = [list(input()) for _ in range(N)]

res = 0

def whith () :
  global res
  for i in range(N) :
    temp = 1
    for j in range(1,N) :
      if arr[i][j] == arr[i][j-1] :
        temp += 1
      else :
        if res < temp :
          res = temp
        temp = 1
    if res < temp :
        res = temp

def height () :
  global res
  for i in range(N) :
    temp = 1
    for j in range(1,N) :
      if arr[j][i] == arr[j-1][i] :
        temp += 1
      else :
        if res < temp :
          res = temp
        temp = 1
    if res < temp :
        res = temp


for i in range(N) :
  for j in range(1,N) :
    arr[i][j] , arr[i][j-1] = arr[i][j-1] , arr[i][j]
    whith()
    height()
    arr[i][j] , arr[i][j-1] = arr[i][j-1] , arr[i][j]

for i in range(N) :
  for j in range(1,N) :
    arr[j][i] , arr[j-1][i] = arr[j-1][i] , arr[j][i]
    whith()
    height()
    arr[j][i] , arr[j-1][i] = arr[j-1][i] , arr[j][i]

print(res)
