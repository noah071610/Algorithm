import itertools

N,M = map(int,input().split())
password = input().split()
vowels = ['a','i','u','e','o']

for i in itertools.combinations(sorted(password),N) :
  s_cnt = 0
  v_cnt = 0
  for j in i :
    if j in vowels :
      v_cnt +=1
    else :
      s_cnt +=1
  if v_cnt > 0 and 1 < s_cnt :
    print("".join(i)) 

# https://www.acmicpc.net/problem/1759
# 후기 : itertools를 적극사용하자, js에도 활용법을 찾자