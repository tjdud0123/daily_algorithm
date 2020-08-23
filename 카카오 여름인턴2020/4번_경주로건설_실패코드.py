# 택시비 적게내기 --> 가격까지 확인셋에넣어서 무한루프를 돌았음

from collections import deque


def visitable(N, x, y, board):
    return 0 <= x < N and 0 <= y < N and board[y][x] == 0


def solution(board):

    N = len(board)
    X, Y, DIRECTION, SUM = 0, 1, 2, 3
    UP, DOWN, RIGHT, LEFT = 0, 1, 2, 3
    DELTAS = [(-1, 0, LEFT), (1, 0, RIGHT), (0, 1, DOWN), (0, -1, UP)]
    que = deque([])
    confirm = set()

    if board[1][0] == 0:  # 아래
        que.append((0, 1, DOWN, 100))
        confirm.add((0, 1, DOWN, 100))
    if board[0][1] == 0:  # 오른쪽
        que.append((1, 0, RIGHT, 100))
        confirm.add((1, 0, RIGHT, 100))
    cand = []
    while que:
        cur = que.popleft()
        if cur[X] == N-1 and cur[Y] == N-1:
            cand.append(cur[SUM])

        for dx, dy, d in DELTAS:
            if cur[DIRECTION] == d:
                next_p = (cur[X] + dx, cur[Y] + dy, d, cur[SUM] + 100)
            else:
                next_p = (cur[X] + dx, cur[Y] + dy, d, cur[SUM] + 500)

            if visitable(N, next_p[X], next_p[Y], board) and next_p not in confirm:
                que.append(next_p)
                confirm.add(next_p)

    return min(cand)
