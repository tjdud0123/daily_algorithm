from collections import deque


def solution(priorities, location):
    N, PRIOR = len(priorities), 0
    que = deque(zip(priorities, range(N)))
    mx = max(que)[PRIOR]

    while que:
        if que[0][PRIOR] >= mx:
            prior, init_loc = que.popleft()
            if que:
                mx = max(que)[PRIOR]
            if init_loc == location:
                return N - len(que)
        else:
            que.append(que.popleft())
