import math
def solution(n, k):
    mod = k
    answer, cand = [], list(range(1, n+1))
    for i in range(n-1, 0, -1):
        div, mod = divmod(mod, math.factorial(i))
        if mod == 0: # 나머지 0일 때
            answer += [cand.pop(div-1)] + cand[::-1]
            return answer
        answer.append(cand.pop(div))  # 나머지 0이 아닐 때
    return [1] # n이 1일 떄