import heapq


def solution(A, B):
    A, B = sorted(A, reverse=True), [-x for x in B]
    heapq.heapify(B)
    count = 0
    for num in A:
        if num < -B[0]:
            heapq.heappop(B)
            count += 1
    return count
