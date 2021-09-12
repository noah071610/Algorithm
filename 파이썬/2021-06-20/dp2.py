n = int(input())

dp = [0 for _ in range(n)]

for i in range(3,n) :
  dp[0]=1
  dp[1]=2
  dp[2]=3
  dp[i] = dp[i-1] + dp[i-2]

if n < 4 : print(n)
else : print(dp[-1]%10007)