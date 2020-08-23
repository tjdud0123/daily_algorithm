from collections import deque


def visitable(N, x, y, board):
    return 0 <= x < N and 0 <= y < N and board[y][x] == 0


def solution(board):
    N = len(board)
    Y, X, DIRECTION, SUM = 0, 1, 2, 3
    UP, DOWN, RIGHT, LEFT = 0, 1, 2, 3
    DELTAS = [(-1, 0, UP), (1, 0, DOWN), (0, 1, RIGHT), (0, -1, LEFT)]
    que = deque([])
    confirm = {(0, 0): 0}

    if board[1][0] == 0:  # 아래
        que.append((1, 0, DOWN, 100))
        confirm[(1, 0)] = 100
    if board[0][1] == 0:  # 오른쪽
        que.append((0, 1, RIGHT, 100))
        confirm[(0, 1)] = 100

    cand = []

    while que:
        cur = que.popleft()
        if cur[X] == N-1 and cur[Y] == N-1:
            cand.append(cur[SUM])

        for dy, dx, d in DELTAS:
            if cur[DIRECTION] == d:
                next_p = (cur[Y] + dy, cur[X] + dx, d, cur[SUM] + 100)
            else:
                next_p = (cur[Y] + dy, cur[X] + dx, d, cur[SUM] + 600)
            check = (next_p[Y], next_p[X])

            if visitable(N, next_p[X], next_p[Y], board):
                if check in confirm and confirm[check] < next_p[SUM]:
                    continue
                que.append(next_p)
                confirm[check] = next_p[SUM]

    return min(cand)
