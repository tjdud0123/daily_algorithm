import itertools


def get_next(cur_y, cur_x, cur_d):
    DELTAS = {'U': (-1, -1), 'D': (1, 0), 'R': (0, 1)}
    dy, dx = DELTAS[cur_d][0], DELTAS[cur_d][1]
    nxt_y, nxt_x = cur_y + dy, cur_x + dx
    return nxt_y, nxt_x


def check_turn(nxt_y, nxt_x, n, snail):
    return nxt_y < 0 or nxt_y >= n or nxt_x > nxt_y or snail[nxt_y][nxt_x] != 0


def solution(n):
    NEXT = {'U': 'D', 'D': 'R', 'R': 'U'}
    N = sum(range(1, n+1))
    snail = [[0] * i for i in range(1, n+1)]

    cur_y, cur_x, cur_d = 0, 0, 'D'
    for num in range(1, N+1):
        snail[cur_y][cur_x] = num
        if check_turn(*get_next(cur_y, cur_x, cur_d), n, snail):
            cur_d = NEXT[cur_d]
        cur_y, cur_x = get_next(cur_y, cur_x, cur_d)

    return list(itertools.chain(*snail))
