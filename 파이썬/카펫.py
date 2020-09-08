# 파이썬
def solution(brown, yellow):
    cand = [(yellow//i, i)
            for i in range(1, int(yellow**.5)+1) if yellow % i == 0]
    for m, n in cand:
        if (m+2) * (n+2) == brown+yellow:
            return [m+2, n+2]
