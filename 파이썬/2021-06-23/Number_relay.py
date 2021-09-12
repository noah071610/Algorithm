# N = input()
# result = 0
# for i in range(len(N)) :
#   if i == len(N) - 1 :
#       result += (int(N) - 10**(len(N)-1) + 1)*len(N)
#   else :
#         result += 9*(10**i)*(i+1)
#         print(result)

# print(result)

n = input()
n_len = len(n) - 1
c = 0
i = 0
while i < n_len:
    c += 9 * (10 ** i) * (i + 1)
    i += 1
c += ((int(n) - (10 ** n_len)) + 1) * (n_len + 1)
print(c)

# https://www.acmicpc.net/problem/1748
# 후기 : 공식은 때로는 외워야지 답이나온다.