import itertools
N = int(input())
S = [list(map(int, input().split())) for _ in range(N)]
members = [i for i in range(N)]
possible_team = []

for i in itertools.combinations(members,N//2) :
  possible_team.append(i)

answer = 1000
for i in range(len(possible_team)//2) :

  team = possible_team[i]
  A = 0
  for j in range(N//2):
    member = team[j]
    for k in team :
      A += S[member][k]

  team = possible_team[-i-1]
  B = 0
  for j in range(N//2):
    member = team[j]
    for k in team:
      B += S[member][k]
  
  answer = min(answer, abs(A - B))

print(answer)