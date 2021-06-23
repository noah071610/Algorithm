n = int(input())

dp = [0 for _ in range(n)]

for i in range(2,n):
  dp[0]=1
  dp[1]=3
  dp[i] = dp[i-1] + dp[i-2] * 2

if n > 2 :
  print(dp[-1]%10007)
elif n == 2 :
  print(3%10007)
elif n ==1 :
  print(n%10007)