N = int(input())

def calc (n) :
  if n == 1 :
    return 1
  elif n == 2 :
    return 2
  elif n == 3 :
    return 4
  return calc(n-1)+calc(n-2)+calc(n-3)

for _ in range(N) :
  x = int(input())
  print(calc(x))

# https://www.acmicpc.net/problem/9095