# 한 줄로 된 간단한 에디터를 구현하려고 한다. 이 편집기는 영어 소문자만을 기록할 수 있는 편집기로, 최대 600,000글자까지 입력할 수 있다.

# 이 편집기에는 '커서'라는 것이 있는데, 커서는 문장의 맨 앞(첫 번째 문자의 왼쪽), 문장의 맨 뒤(마지막 문자의 오른쪽), 또는 문장 중간 임의의 곳(모든 연속된 두 문자 사이)에 위치할 수 있다. 즉 길이가 L인 문자열이 현재 편집기에 입력되어 있으면, 커서가 위치할 수 있는 곳은 L+1가지 경우가 있다.

# 이 편집기가 지원하는 명령어는 다음과 같다.

# L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
# D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
# B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
# 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
# P $	$라는 문자를 커서 왼쪽에 추가함

# 초기에 편집기에 입력되어 있는 문자열이 주어지고, 그 이후 입력한 명령어가 차례로 주어졌을 때, 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 구하는 프로그램을 작성하시오. 단, 명령어가 수행되기 전에 커서는 문장의 맨 뒤에 위치하고 있다고 한다.

from sys import stdin

# 처음 도전했다가 시간초과로 다시 바꿔야했다.
# 단순 index 값으로 도전하면 안된다. 시간복잡도를 계산 해야한다.

"""str = stdin.readline().strop()
N = int(stdin.readline())
cursor = len(str)-1

for _ in range(N) :
  order = stdin.readline().split()
  if order[0] == "L" :
    if cursor > 0 : cursor -= 1 
  elif order[0] == "D" :
    if cursor < len(str)-1 : cursor += 1 
  elif order[0] == "B" :
    if (str[cursor-1]) :
      str.replace(str[cursor-1],"")
  elif order[0] == "P" :
    str = str[0:cursor-1] + order[1] + str[cursor:]
print(str)"""


#처음 도전 시간초과로 커서를 index값이 아닌 두배열의 중간으로 했다.

stack_l = list(stdin.readline().strip())
stack_r = []
n = int(input())

for _ in range(n):
    temp = stdin.readline()
    if temp[0] == 'L':
        if len(stack_l) == 0:
            continue
        stack_r.append(stack_l.pop())
    elif temp[0] == 'D':
        if len(stack_r) == 0:
            continue
        stack_l.append(stack_r.pop())
    elif temp[0] == 'B':
        if len(stack_l) == 0:
            continue
        stack_l.pop()
    elif temp[0] == 'P':
        stack_l.append(temp[2])
# 스택은 FILO 이기 때문에 reverse를 해주면 된다.
# javascript의 경우 list 는 reverse 하면 끝난다.
# "".join(arr1 + arr2) 하면 문자열으로 두배열을 치환한다.
# javascript 경우엔 concat 하고 join("")하면 깔쌈하게 끝난다.
print(''.join(stack_l + list(reversed(stack_r))))

# 짧은 후기 : 시간복잡도가 중요하다, javascript가 좋을때도 많다 ㅎㅎ;