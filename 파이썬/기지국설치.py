import math


def solution(n, stations, w):
    COVER = 2*w + 1
    left = 1
    dists = []
    for s in stations:
        cover_l, cover_r = max(1, s-w), min(s+w, n)

        dists.append(cover_l-left)
        left = cover_r+1

    if left <= n:
        dists.append(n+1-left)

    return sum(map(lambda x: math.ceil(x / COVER), dists))
