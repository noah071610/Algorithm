# from math import *
# from random import *

# floor("") 
# ceil("") 
# sqrt("") 
# round("", 소수점자리) 
# max("") 
# abs("") 
# pow("") 
# random()
# int("")
# randrange(1,45) 1부터 45미만
# randint(1,45) 45이하
# print("넘겨","주세요", sep="~! " , end=" ")
# .ljust(8) 8개 공간을 만들고 왼쪽 정렬
# .zfill(3) 3개 공간 그리고 0 채움.
# print("{0:빈공간값<+빈공간수}".format(500))
# print("{0:,}".format(500))
# print("{0:.2f}".format(5/3))

# intro = '나는 {name}입니다 {hobbit}을 좋아해요'.format(name="noah",hobbit=323)
# switch = '나는 {1}입니다 {0}을 좋아해요'.format("noah",323)

# print("""나는
# 파이썬이
# 쉬
# 어
# 요""")

# print("0123456789"[8:])

# ids = list(range(1,21))

# shuffle(ids)
# winers = sample(ids,4)

# print(f"Checken : {winers[0]} , Coffee : {winers[1:]} ! Thank you")

# 문자도 str[0] 이렇게 가능 [0:2](이상 미만) 0은 생략 가능 끝도 생략가능 [7:] , [-7:]
# lower() upper() isupper() len("#") replace("#","")
# index("#", index + 1)
# find("#") 없으면 -1 , index 는 오류가납니다. 
# count("#")

# \r 커서 맨앞
# \b 백스페이스
# \t 탭

# 배열
# insert(번호,값) splice(번호, 0, 값);
# add() shift
# append(값) push
# pop
# sort , reverse , clear 
# extend concat
# [i+100 for i in arr]


# 객체
# obj[key] = value 같음
# obj.get(key,default message) => value 없어도 가능
# key in obj => Boolean comes out
# del obj[key] => Delete key and value
# keys() values() items() => entires()

# Tuple
# item = (1,2,3)
# name, age, some = "noah",28,"Kakao"

# Set
# my_set = {1,2,3,4,5,5} new Set
# my_newSet = set([1,2,3,4,5,5])
# & intersection("")
# | union("")
# - difference("")
# add("")
# remove("")

# Type Change type("")
# list("")
# tuple("")
# set("")

# if 는 : 을 쓰며 or 사용 자스에선 || and 는 &&
# input 은 항상 str 이니 int 를 사용하자.

# def function(arg=default , arg2=default, *arg3) : 
# return arg1 , arg2 가능 ㄷㄷㄷㄷㄷㄷ
# 가변인자 는 * , for in 돌려주면 펴남
# 전역변수 쓰려먼 global 써야함 충격

# appendleft(#)
# popleft() or pop(0)

import itertools

print(int("1234"[::-1]))

