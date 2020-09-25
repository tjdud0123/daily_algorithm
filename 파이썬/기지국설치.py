def solution(n, stations, w):
    arrived = [True] + [False] * n
    count = 0

    for s in stations:
        left, right = max(1, s-w), min(s+w, n)
        for i in range(left, right+1):
            arrived[i] = True

    for i in range(n+1):
        if arrived[i]:
            continue
        s = min(n, i+w)
        left, right = max(1, s-w), min(s+w, n)
        for i in range(left, right+1):
            arrived[i] = True
        count += 1

    return count
