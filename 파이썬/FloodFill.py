from collections import deque


def visitable(n, m, y, x):
    return 0 <= y < n and 0 <= x < m


def solution(n, m, image):
    visited, bfs_nodes = set(), deque([])
    DELTAS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    answer = 0

    for y in range(n):
        for x in range(m):
            if (y, x) in visited:
                continue
            answer += 1
            bfs_nodes.append((y, x))
            visited.add((y, x))

            while bfs_nodes:
                cur_y, cur_x = bfs_nodes.popleft()
                for dx, dy in DELTAS:
                    next_y, next_x = cur_y + dy, cur_x + dx
                    if visitable(n, m, next_y, next_x) and \
                        (next_y, next_x) not in visited and \
                            image[cur_y][cur_x] == image[next_y][next_x]:
                        bfs_nodes.append((next_y, next_x))
                        visited.add((next_y, next_x))

    return answer
