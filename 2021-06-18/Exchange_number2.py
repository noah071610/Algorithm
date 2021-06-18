from sys import stdin 

N,B = stdin.readline().split()
B = int(B)

res = 0

for i, c in enumerate(N): 
  target = int(c) if c.isdigit() else ord(c) - 55 
  res += (target * (B**i)) 

print(str(res))

N,B = map(int,stdin.readline().split())