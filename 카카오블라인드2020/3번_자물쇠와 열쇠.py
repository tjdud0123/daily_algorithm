# 다른 풀이
def rotate90(a):
    n = len(a)
    m = len(a[0])

    result = [[0] * n for _in range(m)]
    for i in range(n):
        for j in range(m):
            result[j][n-1-i] = a[i][j]

    return result


def check(new_lock):
    L = len(new_lock) // 3
    for i in range(L, 2*L):
        for j in range(L, 2*L):
            if new_lock[i][j] != 1:
                return False
    return True


def solution(key, lock):
    n, m = len(key), len(lock)

    new_lock = [[0] * (n*3) for _in range(n*3)]
    for i in range(n):
        for j in range(n):
            new_lock[][]
