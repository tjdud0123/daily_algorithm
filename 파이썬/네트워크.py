from collections import deque


def solution(n, computers):
    visited, bfs_nodes = set(), deque([])
    count = 0

    for node in range(n):
        if node in visited:
            continue
        count += 1
        bfs_nodes.append(node)
        visited.add(node)

        while bfs_nodes:
            new_node = bfs_nodes.popleft()
            for node, connect in enumerate(computers[new_node]):
                if connect and node not in visited:
                    bfs_nodes.append(node)
                    visited.add(new_node)

    return count
