from sys import stdin 

system = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

N,numberal = map(int,stdin.readline().split())

res = ""

while N != 0 :
    res = str(system[N%numberal]) + res
    N //= numberal

print(res)