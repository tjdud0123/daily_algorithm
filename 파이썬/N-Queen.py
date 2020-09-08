# 파이썬
def dfs(n, y, col, diag1, diag2):
    global answer
    if y == n:
        answer += 1
        return

    for x in range(n):
        if x in col or (x + y) in diag1 or (x - y) in diag2:
            continue
        col.add(x)
        diag1.add(x + y)
        diag2.add(x - y)
        dfs(n, y+1, col, diag1, diag2)
        col.remove(x)
        diag1.remove(x + y)
        diag2.remove(x - y)


def solution(n):
    global answer
    col, diag1, diag2 = set(), set(), set()
    answer = 0
    dfs(n, 0, col, diag1, diag2)
    return answer
