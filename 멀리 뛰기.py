def solution(n): # DP
    fibo1, fibo2 = 1, 2
    if n <= 2:
        return n
    for _ in range(n-2): # f(n-1) & 1칸뛰기 + f(n-2) & 2칸뛰기
        fibo1, fibo2 = fibo2, fibo1+fibo2
    return fibo2 % 1234567
