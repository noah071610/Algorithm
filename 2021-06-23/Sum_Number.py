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


  # 이렇게도 됨
  # n = [1,2,4]
  # for i in range(3,x) :
  #   n.append(n[i-1]+n[i-2]+n[i-3])
  # print(n[-1])

# https://www.acmicpc.net/problem/9095
# 후기 : 점화식을 잘 찾는 안목을 기르자.