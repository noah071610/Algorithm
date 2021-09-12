# 괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 

# 여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 

N = int(input())

for _ in range(N):
  stack = []
  # 1 str 배열화 : list(input())
  # 띄어쓰기된 str 배열화 : input().split()
  bracket = list(input())
  naljiBreak = True
  for i in bracket:
    if i == "(" :
      stack.append(i)
    else :
      while(True) :
        if (not stack) :
          naljiBreak = False
          # 스택값이 없는데 팝을 한다는거? 무조건 틀린것
          break
        elif stack.pop() == "(" :
          break
    if (naljiBreak == False) :
      # naljiBreak 가 거짓이면 볼것도없이 NO 다.
      # 예시 : )()()() 아무리 뒤가 맞다한들 처음부터 NO
      break
  print("YES") if (not stack and naljiBreak) else print("NO") 

# 짧은 후기 : if else 문을 이렇게도 쓸수있네 (feat.자바스크립트매니악)