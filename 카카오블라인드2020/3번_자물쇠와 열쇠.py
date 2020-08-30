# 다른 풀이 - 보드크기를 세배로
def rotate90(a):
    n = len(a)
    m = len(a[0])

    result = [[0] * n for _ in range(m)]
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
    n, m = len(lock), len(key)

    new_lock = [[0] * (n*3) for _ in range(n*3)]
    for i in range(n):
        for j in range(n):
            new_lock[i+n][j+n] = lock[i][j]

    for rotation in range(4):
        key = rotate90(key)
        for x in range(n*2):
            for y in range(n*2):

                for i in range(m):
                    for j in range(m):
                        new_lock[x+i][y+j] += key[i][j]

                if check(new_lock):
                    return True

                for i in range(m):
                    for j in range(m):
                        new_lock[x+i][y+j] -= key[i][j]

    return False
