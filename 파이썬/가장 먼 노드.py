from collections import deque


def solution(n, edge):
    answer = 0
    nodes = {}
    for v1, v2 in edge:
        nodes[v1] = nodes.get(v1, []) + [v2]
        nodes[v2] = nodes.get(v2, []) + [v1]
    que = deque([(1, 0)])
    cand = []
    visited = set([1])
    while que:
        cur_node, dist = que.popleft()
        for nxt_node in nodes[cur_node]:
            if not nxt_node in visited:
                que.append((nxt_node, dist+1))
                visited.add(nxt_node)
        cand.append(dist)
    max_dist = max(cand)
    return cand.count(max_dist)
