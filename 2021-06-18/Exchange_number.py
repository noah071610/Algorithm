from sys import stdin 

system = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

N,B = map(int,stdin.readline().split())

res = ""

while N != 0:
    res = str(system[N % B]) + res
    N //= B

print(res)