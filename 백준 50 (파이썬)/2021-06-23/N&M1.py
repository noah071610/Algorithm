import itertools

N,M = map(int,input().split())

print("================")
for x in itertools.product(range(1,N+1),repeat=M) :
  print(*x)

print("================")
for x in itertools.permutations(range(1,N+1),M) :
  print(*x)

print("================")
for x in itertools.combinations(range(1,N+1),M) :
  print(*x)

print("================")
for x in itertools.combinations_with_replacement(range(1,N+1),M) :
  print(*x)

print("================")
X = itertools.chain("123"+"abc")
print(*X)

print("================")
X = itertools.compress("abcde",[1,0,1,0,1])
print(*X)