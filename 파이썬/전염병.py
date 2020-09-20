def can_infest(y, x, m, n, state):
    return 0 <= y < m and 0 <= x < n and state[y][x] == 0

def solution(m, n, infests, vaccinateds):   
    blank = m*n - len(infests) - len(vaccinateds)
    if blank == 0: # 모두 백신이나 감염
        return 0
    
    state = [[0] * n for i in range(m)] # 상태 확인 표
    for y, x in vaccinateds + infests:
        state[y-1][x-1] = 1
        
    day = -1
    cur_infests = [(y-1, x-1) for y, x in infests]
    
    DELTAS, Y, X = [(0, 1), (0, -1), (-1, 0), (1, 0)], 0, 1
    while cur_infests:
        day += 1
        new_infests = []
        for infest in cur_infests:
            for dy, dx in DELTAS:
                nxt = infest[Y] + dy, infest[X] + dx
                if can_infest(*nxt, m, n, state):
                    new_infests.append(nxt)
                    state[nxt[Y]][nxt[X]] = 1
                    blank -= 1
        cur_infests = new_infests

    return day if blank == 0 else -1