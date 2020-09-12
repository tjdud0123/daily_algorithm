from collections import deque


def visitable(N, M, y, x, maps):
    return 0 <= y < N and 0 <= x < M and maps[y][x] == 1


def solution(maps):

    N, M, Y, X, MOVE = len(maps), len(maps[0]), 0, 1, 2
    DELTAS = [(-1, 0), (1, 0), (0, 1), (0, -1)]  # up down right left
    que, confirm = deque([(0, 0, 1)]), set((0, 0, 1))

    while que:
        cur = que.popleft()
        maps[cur[Y]][cur[X]] = 0

        if cur[Y] == N-1 and cur[X] == M-1:
            return cur[MOVE]

        for dy, dx in DELTAS:
            next_p = (cur[Y] + dy, cur[X] + dx, cur[MOVE] + 1)
            if visitable(N, M, next_p[Y], next_p[X], maps) and next_p not in confirm:
                que.append(next_p)
                confirm.add(next_p)

    return -1
