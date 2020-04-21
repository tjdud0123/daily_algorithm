def solution(n):
    ans = 0
    while n > 1:
        if n % 2 == 1: # 2로 나눠떨어지지 않으면
            ans += 1 # 한 칸씩 가야함
        n = n // 2

    return ans + 1

 # bin(n).count('1') 2진수로 변환하고 1갯수 세기
