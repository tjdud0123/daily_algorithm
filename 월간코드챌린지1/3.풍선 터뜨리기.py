import heapq


def solution(a):
    balloons = [(b, i) for i, b in enumerate(a)]
    result = len(a)
    left, right = balloons[:1], balloons[1:]
    heapq.heapify(left)
    heapq.heapify(right)

    NUM, IDX = 0, 1
    for i, ballon in enumerate(a[1:-1], 1):
        if ballon == right[0][NUM]:
            while right[0][IDX] <= i:
                heapq.heappop(right)
        if ballon > left[0][NUM] and ballon > right[0][NUM]:
            result -= 1
        heapq.heappush(left, (ballon, i))
    return result
