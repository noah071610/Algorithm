# 요세푸스 문제는 다음과 같다.

# 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

# N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

# import sys

# N,K = map(int,sys.stdin.readline().split())

# queue = [i for i in range(1,N+1)]
# answer = []
# cnt = 1

# while (len(queue) > 0):
#   if cnt == K :
#     answer.append(queue.pop(0))
#     cnt = 1
#   else :
#     queue.append(queue.pop(0))
#     cnt += 1

# print("<"+ ", ".join(str(i) for i in answer) +">")

#❗❗❗❗
# 위에는 시도했으나 시간초과로 실패 queue를 쓰는게 아니였다
#❗❗❗❗

N,K = map(int,input().split())
arr = [i for i in range(1,N+1)] # 배열 만들기❗❗❗❗
# 자스로는 Array.from({length: N},(v,i)=> i+1) 인데 자스가 더좋다..ㅎ

answer = []
target = 0 # 뽑아낼 타겟 인덱스번호

for _ in range(N):
    target += K-1 # 인덱스는 0부터 시작하기때문에 -1
    if target >= len(arr): # 타켓 인덱스가 arr 값을 넘어가면
        target = target%len(arr) 
        # 나머지 연산자로 다시 0부터 시작해 찾는다.
        # target이 6 이고 arr가 5면 6%5 = 1이 타겟 인덱스번호❗❗❗❗
    answer.append(str(arr.pop(target)))
print("<",", ".join(answer),">", sep='')

# 후기 : 나머지연산자로 queue를 대체할수있다, 효율좋은 코드 많다.