from sys import stdin

def bin_func (num) :
  bin = ""
  while num > 0 :
    bin = str(num % 2) + bin
    if(num % 2 == 0) :
      num //= 2
    else :
      num //= -2
  return bin

def bir2deci (num) :
  sum = 0
  num = num[::-1]
  for i in range(len(num)) :
    if int(num[i]) == 1 :
      if i % 2 == 0 :
        sum += 2**i
      else :
        sum += -2**i
  return sum

N = abs(int(input()))

print(bir2deci(bin(N)[2:]))