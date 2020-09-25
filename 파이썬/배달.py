from collections import deque


def solution(N, road, K):

    nodes = {}
    dist = {i: float('inf') if i != 1 else 0 for i in range(1, N+1)}
    for v1, v2, d in road:
        nodes[v1] = nodes.get(v1, []) + [(v2, d)]
        nodes[v2] = nodes.get(v2, []) + [(v1, d)]
    que = deque([1])
    while que:
        cur_node = que.popleft()
        for nxt_node, d in nodes[cur_node]:
            if dist[nxt_node] > dist[cur_node] + d:
                dist[nxt_node] = dist[cur_node] + d
                que.append(nxt_node)

    return len([True for dist in dist.values() if dist <= K])
