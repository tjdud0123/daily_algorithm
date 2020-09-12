def visitable(x, y, m, n, state):
    return 0 <= x < m and 0 <= y < n and state[x][y]


def solution(m, n, infests, vaccinateds):

    answer, whole, count = 0, m*n, 0
    state = [[True] * n for _ in range(m)]
    new_infe = []

    for x, y in infests:
        state[x-1][y-1] = False
        count += 1
        new_infe.append((x-1, y-1))

    for x, y in vaccinateds:
        state[x-1][y-1] = False
        count += 1

    Deltas = ((0, 1), (0, -1), (-1, 0), (1, 0))

    while True:
        if not new_infe:
            return answer if count == whole else -1
        temp = []
        while new_infe:
            cur_p = new_infe.pop()
            for dx, dy in Deltas:
                x, y = cur_p[0] + dx, cur_p[1] + dy
                if visitable(x, y, m, n, state):
                    state[x][y] = False
                    count += 1
                    if count == whole:
                        return answer + 1
                    temp.append((x, y))
        answer += 1
        new_infe += temp
