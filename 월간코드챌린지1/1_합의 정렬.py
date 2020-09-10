from itertools import combinations


def solution(numbers):
    result = list(set(map(sum, combinations(numbers, 2))))
    return sorted(result)
