from collections import deque
import heapq


def solution(a):
    answer = len(a)
    for i, num in enumerate(a[1:-1]):
        left = min(a[:i])
        right = min(a[i+1:])
        if left < num and num > right:
            answer -= 1

    return answer
