from itertools import product


def solution(n, money):
    N = len(money)
    dp = [[1] + [0]*n for _ in range(N)]
    for i in range(N):
        for j in range(1, n+1):
            dp[i][j] = dp[i-1][j] + dp[i][j-money[i]]
    return dp[N-1][n]
