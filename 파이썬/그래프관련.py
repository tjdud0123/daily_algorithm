from collections import defaultdict
from collections import deque


def get_needs(pre_order, k):
    needs = set()
    stack = pre_order[k].copy()
    while stack:
        cook = stack.pop()
        needs.add(cook)
        stack += pre_order[cook]
    return needs


def get_level(cook, pre_order):
    if not pre_order[cook]:
        return 1
    que = deque([(nxt, 2) for nxt in pre_order[cook]])
    while que:
        c, dist = que.popleft()
        for nxt in pre_order[c]:
            que.append((nxt, dist+1))
        if not que:
            return dist


def get_levels(pre_order, n):
    levels = {i: get_level(i, pre_order) for i in range(1, n+1)}
    return levels


def get_min(levels, pre_order):
    levels = {i: get_level(i, pre_order) for i in range(1, n+1)}
    return levels


def get_min_times(levels, pre_order, cook_time):
    temp = sorted(levels.items(), key=lambda x: x[1])
    min_time = {}
    for cook, level in temp:
        if level == 1:
            min_time[cook] = cook_time[cook]
        else:
            min_time[cook] = cook_time[cook] + \
                max([min_time[c] for c in pre_order[cook]])
    return min_time


def solution(cook_times, order, k):
    pre_order = defaultdict(list)
    cook_time = {i: time for i, time in enumerate(cook_times, 1)}
    for pre, nxt in order:
        pre_order[nxt].append(pre)

    needs = get_needs(pre_order, k)
    levels = get_levels(pre_order, len(cook_times))
    min_time = get_min_times(levels, pre_order, cook_time)

    return [len(needs), min_time[k]]
