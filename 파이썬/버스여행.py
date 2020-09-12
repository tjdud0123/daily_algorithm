# 1) 플로이드 워셜 이용 O(n^3)
def solution(n, signs):
    for temp in range(n):
        for start in range(n):
            for end in range(n):
                if signs[start][temp] == 1 and signs[temp][end] == 1:
                    signs[start][end] = 1
    return signs

# 2) DFS / 큐 이용


def solution(n, signs):
    for start in range(n):
        temps = [i for i, pos in enumerate(signs[start]) if pos]
        while temps:
            temp = temps.pop()
            for end, pos in enumerate(signs[temp]):
                if pos and signs[start][end] == 0:
                    signs[start][end] = 1
                    temps.append(end)
    return signs
