from sys import stdin

input = stdin.readline().strip()

arr = [-1] * 26


for chr in input :
  arr[ord(chr)-97] = input.index(chr)

print(" ".join(map(str,arr)))