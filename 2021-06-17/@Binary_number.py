from sys import stdin

def bir2deci (num) :
  sum = 0
  for i in range(len(num)) :
    if int(num[i]) == 1 :
      sum += 2**i
  return sum

def deci2bir (num) :
  bir = ""
  while num > 0 :
    bir = str(num % 2) + bir
    num //= 2
  return int(bir)

def bir2octal (num) :
  temp =  [num[i:i+3] for i in range(0, len(num), 3)]
  octal = ""
  for i in temp :
    octal = str(bir2deci(i)) + octal
  return octal



print("2진수에서 10진수로 :")
bir = list(reversed(stdin.readline()))[1:]
print(bir2deci(bir))
# 그냥 한방에 끝내는법
print(str(int("0b"+stdin.readline(),2)))

print("10진수에서 2진수로 :" )
deci = int(stdin.readline())
print(deci2bir(deci))
# 그냥 한방에 끝내는법
easy = format(int(stdin.readline()),'b')
print(easy)

print("2진수에서 8진수로 :")
bir = stdin.readline().strip()[::-1]
print(bir2octal(bir))
# 그냥 한방에 끝내는법
print(oct(int(stdin.readline(),2))[2:])